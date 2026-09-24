import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Chemin absolu vers le dossier posts/
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Récupère tous les fichiers Markdown présents dans /posts.
 */
export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

/**
 * Récupère les métadonnées et le contenu Markdown
 * d'un article spécifique.
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

/**
 * Récupère tous les articles et les trie
 * du plus récent au plus ancien.
 */
export function getAllPosts() {
  const slugs = getPostSlugs();

  const posts = slugs.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    return getPostBySlug(slug);
  });

  return posts.sort((postA, postB) => {
    if (postA.date < postB.date) {
      return 1;
    }

    if (postA.date > postB.date) {
      return -1;
    }

    return 0;
  });
}

/**
 * Récupère un article et convertit son Markdown
 * en HTML.
 */
export async function getPostData(slug) {
  const post = getPostBySlug(slug);

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return {
    ...post,
    contentHtml,
  };
}

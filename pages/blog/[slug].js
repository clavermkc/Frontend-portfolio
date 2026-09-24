import Link from "next/link";
import { getPostData, getPostSlugs } from "../../lib/posts";
import styles from "../../styles/blog.module.css";

export default function Post({ post }) {
  return (
    <main className={styles.articlePage}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <Link href="/blog" className={styles.breadcrumbLink}>
          Blog
        </Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbCurrent}>{post.title}</span>
      </nav>

      <header className={styles.articleHeader}>
        <Link href="/blog" className={styles.backLink}>
          ← Retour au blog
        </Link>

        <h1 className={styles.articleTitle}>{post.title}</h1>

        <div className={styles.articleMeta}>
          <time dateTime={post.date}>{post.date}</time>
          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={`${post.slug}-${tag}`} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.excerpt && <p className={styles.articleExcerpt}>{post.excerpt}</p>}
      </header>

      <article className={styles.articleContentWrap}>
        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{
            __html: post.contentHtml,
          }}
        />
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);

  return {
    props: {
      post,
    },
  };
}

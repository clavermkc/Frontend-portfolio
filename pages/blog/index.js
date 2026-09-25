import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import styles from "../../styles/blog.module.css";

export default function Blog({ posts }) {
  return (
    <main className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <Link href="/blog" className={styles.breadcrumbCurrent}>
          Blog
        </Link>
      </nav>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>Blog</span>
        <h3 className={styles.title}>Articles &amp; projets</h3>

        <div className={styles.heroMeta}>
          <p className={styles.description}>
            Je partage ici mes projets, mes expériences et des sujets autour du
            développement logiciel.
          </p>
          <span className={styles.count}>{posts.length} articles</span>
        </div>
      </header>

      <section className={styles.list}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <div className={styles.metaRow}>
              <time dateTime={post.date}>{post.date}</time>
            </div>

            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  {post.title}
                </Link>
              </h4>

              <p className={styles.excerpt}>{post.excerpt}</p>

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

            <div className={styles.readMoreWrap}>
              <Link href={`/blog/${post.slug}`} className={styles.link}>
                Lire l&apos;article →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

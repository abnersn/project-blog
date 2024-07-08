
import BlogHero from '@/components/BlogHero';

import { loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);
  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract
  }
}

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title="Example post!"
        publishedOn={new Date(blogPost.frontmatter.publishedOn)}
      />
      <div className={styles.page}>
        <MDXRemote source={blogPost.content} />
      </div>
    </article>
  );
}

export default BlogPost;

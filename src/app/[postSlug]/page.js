import BlogHero from "@/components/BlogHero";

import CircularColorsDemo from "@/components/CircularColorsDemo";
import CodeSnippet from "@/components/CodeSnippet";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);
  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  };
}

const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo")
);

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title="Example post!"
        publishedOn={new Date(blogPost.frontmatter.publishedOn)}
      />
      <div className={styles.page}>
        <MDXRemote
          source={blogPost.content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;

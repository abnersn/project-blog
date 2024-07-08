import { getBlogPostList } from '@/helpers/file-helpers';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import { BLOG_TITLE } from '@/constants';
import styles from './homepage.module.css';

export const metadata = {
  title: BLOG_TITLE,
  content: 'A wonderful blog about JavaScript'
}

async function Home() {
  const posts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {posts.map((post) => (<BlogSummaryCard
        key={post.slug}
        slug={post.slug}
        title={post.title}
        abstract={post.abstract}
        publishedOn={new Date(post.publishedOn)}
      />))}
    </div>
  );
}

export default Home;

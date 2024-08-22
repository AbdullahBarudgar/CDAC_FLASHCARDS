import Image from 'next/image';
import styles from './singlepost.module.css'
import { Suspense } from 'react';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/library/data';


export const generateMetadata = async  ({params}) => {
  const { slug } = params;
  const post = await getPost(slug);
  return{
    title: post.title,
    description: post.description,
  };
};

const SinglePostPage = async ({params}) => {

  const { slug } = params;

  const post = await getPost(slug);
  console.log(post);

  const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getFullYear()}`;

    return <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt='' fill/>
      </div>}
      <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          {post && (
            <Suspense fallback={<div>loading.....</div>}>
            <PostUser userId= {post.userId}/> 
            </Suspense>)}
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>{formattedDate}</span>
        </div>
        </div>
        <div className={styles.content}>
        {post.description}
        </div>
      </div>
    </div>;
  };
  
  export default SinglePostPage;
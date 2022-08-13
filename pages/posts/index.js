import React from 'react';
import Link from 'next/link';

const posts = (props) => {
  console.log(props.posts);
  return (
    <>
      <h1>Posts</h1>
      {props.posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </>
  );
};
export async function getStaticProps() {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')).json();
  return {
    props: {
      posts: data,
    },
  };
}
export default posts;

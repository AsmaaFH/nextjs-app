import React from 'react';

const posts = (props) => {
  return (
    <>
      <h1>Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
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

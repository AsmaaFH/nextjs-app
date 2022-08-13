import React from 'react';

const Post1 = (props) => {
  console.log(props);
  return (
    <>
      <h4>{props.post.title}</h4>
      <p>{props.post.body}</p>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

export default Post1;

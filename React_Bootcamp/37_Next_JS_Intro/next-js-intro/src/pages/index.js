import Link from 'next/link'
import React, { useEffect } from 'react'

// Runs during build i.e. SSR load
// export async function getStaticProps() {
//   console.log("Inside Static Props method");
//   return { props: {} }
// }

// Runs on every request
export async function getServerSideProps(context) {
  console.log("Inside getServerSide Props method");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json()
  return {
    props: { posts }, // will be passed to the page component as props
  }
}

function index({ posts }) {
  console.log("**********Runing Homepage*********");

  // Useeffect only executes client side
  // useEffect(() => {
  //   console.log("Fetching Data!!!");
  // }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`} >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default index
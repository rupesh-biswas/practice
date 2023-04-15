import Link from 'next/link';
import React from 'react'

export async function getServerSideProps(props) {
    const query = props.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const comments = await res.json()
    if (!comments || comments.length === 0) {
        return {
            notFound: true
        }
    }
    return {
        props: { query, comments }
    }
}

function post({ query, comments }) {
    return (
        <div>
            <h1>Displaying comments for post Number: {query.id}</h1>
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    )
}

function Comment({ postId, id, email, body }) {
    return (
        <div>
            <h5>{email}</h5>
            <p>{body}</p>
            <Link href={`/post/${postId}/${id}`}>Know More</Link>
        </div>
    )
}

export default post
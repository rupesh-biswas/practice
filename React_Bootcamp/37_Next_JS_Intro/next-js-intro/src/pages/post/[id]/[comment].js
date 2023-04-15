import React from 'react'

export async function getServerSideProps(props) {
    const query = props.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}&id=${query.comment}`);
    const comment = (await res.json())[0]
    if (!comment) {
        return {
            notFound: true
        }
    }
    return {
        props: { query, comment }
    }
}

function CommentPage({ query, comment }) {
    return (
        <div>
            <h1>Displaying comment for post Number: {query.id} and Comment ID: {query.comment}</h1>
            <Comment {...comment} />
        </div>
    )
}

function Comment({ name, email, body }) {
    return (
        <div>
            <p>{body}</p>
            <p>By: {name} - {email}</p>
        </div>
    )
}

export default CommentPage;
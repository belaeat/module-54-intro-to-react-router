import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css'

const PostDetail = () => {
    const post = useLoaderData();


    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className='post-detail'>
            <h3>Details about your post.</h3>
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>

            {/* To go back */}
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
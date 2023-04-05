import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;

    // button diye jevabe dekhano jay
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h3>TItle: {title}</h3>
            
            <Link to={`/post/${id}`}> Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>


            {/* button diye aro ekvabe dekhano jay */}
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;
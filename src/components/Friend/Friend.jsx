import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend)
    const {email, name, id, phone} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            
            {/* ekhane path ta set korte hobe, then template string diye dynamic vabe set korte hobe, and carefully / use kortei hobe*/}
            
            <p><Link to={`/friend/${id}`}>Show details</Link></p>
        </div>
    );
};

export default Friend;
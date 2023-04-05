import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {

    /* Using loader data. loader data always component e use korte hoy! */

    const friends = useLoaderData();

    return (
        <div>
            <h3>There are my friends: {friends.length}
            </h3>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;
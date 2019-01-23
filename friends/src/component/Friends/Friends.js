import React from 'react';
import Friend from './Friend';

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.email}
          handleDelete={(e) => props.handleDelete(e, friend.id)}
        />
      ))}
    </div>
  );
};

export default Friends;

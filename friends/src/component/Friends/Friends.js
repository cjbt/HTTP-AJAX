import React from 'react';
import Friend from './Friend';

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend friend={friend} key={friend.email} />
      ))}
    </div>
  );
};

export default Friends;

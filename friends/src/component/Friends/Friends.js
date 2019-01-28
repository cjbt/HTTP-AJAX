import React from 'react';
import Friend from './Friend';

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.email}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}
          clickUpdate={props.clickUpdate}
        />
      ))}
    </div>
  );
};

export default Friends;

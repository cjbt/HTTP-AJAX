import React from 'react';

const Friend = props => {
  const { age, email, name } = props.friend;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
};

export default Friend;

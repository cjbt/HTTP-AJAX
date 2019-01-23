import React from 'react';

const Friend = props => {
  const { age, email, name, id } = props.friend;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
      <button onClick={e => props.handleDelete(e, id)}>x</button>
    </div>
  );
};

export default Friend;

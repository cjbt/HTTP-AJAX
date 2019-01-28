import React from 'react';

const NewFriendForm = props => {
  function handleSubmitLol(e) {
    e.preventDefault();
    if (isUpdating) {
      handleUpdate();
    } else {
      handleSubmit();
    }
  }

  const {
    name,
    age,
    email,
    handleChange,
    handleSubmit,
    isUpdating,
    handleUpdate
  } = props;
  console.log(isUpdating);
  return (
    <form onSubmit={handleSubmitLol}>
      <input
        name='name'
        type='text'
        value={name}
        onChange={handleChange}
        placeholder='Name'
        required
      />
      <input
        name='age'
        type='text'
        value={age}
        onChange={handleChange}
        placeholder='Age'
        required
      />
      <input
        name='email'
        type='email'
        value={email}
        onChange={handleChange}
        placeholder='Email'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewFriendForm;

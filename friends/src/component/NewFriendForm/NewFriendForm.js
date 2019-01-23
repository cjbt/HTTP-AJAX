import React from 'react';

const NewFriendForm = props => {
  const { name, age, email, handleChange } = props;
  return (
    <form>
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

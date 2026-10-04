import React from 'react';

function Form() {
  return (
    <form className="form" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '20px auto' }}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

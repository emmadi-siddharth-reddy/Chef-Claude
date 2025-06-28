import React from 'react';
import ReactDOM from 'react-dom/client';

export function Practice() {

  function handleSubmit(formData) {
    const email = formData.get("password")
    console.log(email)
  }
  return (
    <section>
      <h1>SignUp Form</h1>
      <form action={handleSubmit} >
        <label htmlFor='email'>Email:  </label>
        <input id='email' type='email' name='email' placeholder='siddu@gmail.com' />
        <br />
        <label htmlFor='password'>Password:  </label>
        <input id='password' type='password' name='password' />
        <br/>
        <button>Submit</button>
      </form>
    </section>
  )
}


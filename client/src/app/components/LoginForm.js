import React from 'react'
import { customStyles } from '../helpers'

const LoginForm = ({ values, registrate, onChange, formErrors }) => {
  return (
    <form className="create-input-container" onChange={onChange}>
      <section>
        <h2>Username:</h2>
        <input
          className={formErrors.username ? 'error' : ''}
          type="text"
          name="username"
          defaultValue={values.username}
        />
        {
          formErrors.username &&
          <p className="err">{ formErrors.username }</p>
        }
      </section>
      <section>
        <h2>Email address:</h2>
        <input
            className={formErrors.email ? 'error' : ''}
            type="text"
            name="email"
            defaultValue={values.email}
          />
        {
          formErrors.email &&
          <p className="err">{  formErrors.email  }</p>
        }
      </section>
      <section>
        <h2>Password:</h2>
        <input
          className={formErrors.password ? 'error' : ''}
          type="password"
          name="password"
          defaultValue={values.email}
        />
        {
          formErrors.password &&
          <p className="err">{ formErrors.password }</p>
        }
      </section>
      <section>
        <button onClick={registrate}>Login</button>
      </section>
    </form>
  )
}

export default LoginForm

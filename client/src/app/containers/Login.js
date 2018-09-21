import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { validateForm } from '../helpers'
import { login } from '../modules/index'

class Login extends Component {
  state = {
    username: '',
    email: '',
    password:'',
    formErrors: {
      username: '',
      email: '',
      password: ''
    },
    hasErrors: false
  }

  registrate = ev => {
    ev.preventDefault()

    const { dispatch } = this.props
     const isValid = validateForm(this.state)

      if (isValid.hasErrors)
        this.setState({ formErrors: isValid.formErrors })
      else
        dispatch(login(isValid.username, isValid.email))
  }

  onChange = ev => {
    const value = ev.target.value
    const name = ev.target.name

    this.setState({[name]: value})
  }

  render() {
    const { formErrors, showModal } = this.state

    return (
      <section className="container-list">
        <LoginForm
            registrate={this.registrate}
            values={this.state}
            error={this.state.error}
            onChange={this.onChange}
            formErrors={formErrors}
            showModal={showModal}
            toggleModal={this.toggleModal}
          />
      </section>
    )
  }
}

export default connect()(Login)

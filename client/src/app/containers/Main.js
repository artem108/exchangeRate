import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import ListsCurr from './List'

class Main extends Component {
  render() {
    const { isLogin } = this.props

    return (
      <section className="main-container">
        {
          isLogin
          ? <ListsCurr />
          : <Login/>
        }
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.main.isLogin,
  }
}

export default connect(mapStateToProps)(Main)

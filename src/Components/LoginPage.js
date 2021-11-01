import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LoginPage.css'
export default class LoginPage extends Component {
  render() {
    return (
      <div className='App'>
        <div className='w-100'>
          <h1 className='form_heading'>LOGIN PAGE</h1>
        </div>
        <div className='w-100 login_buttons'>
          <Link
            to='/database'
            style={{ paddingLeft: 13, textDecoration: 'none' }}
          >
            <button type='button' className='btn btn-success'>
              Database
            </button>
          </Link>
          <Link
            to='/dataentry'
            style={{ paddingLeft: 13, textDecoration: 'none' }}
          >
            <button type='button' className='btn btn-primary '>
              Dataentry
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

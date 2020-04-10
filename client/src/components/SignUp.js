import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Field, reduxForm } from 'redux-form';

class SignUp extends React.Component {
  renderInput = ({ input, meta, label, type }) => {
    return(
      <div className='form__group'>
        <label className='form__label'>{label}</label>
        <input 
          type={type} 
          className='form__input' 
          { ...input }
          autoComplete='off'
        />
        <div className='form__message'>
          { meta.error }
        </div>
      </div>
    );
  }

  render(){
    console.log(this.props)
    return(
      <div className='signup'>
        <form className='form signup__side'>
          <h2 className='heading-secondary u-margin-bottom-small'>Create Account</h2>
          <Field name='email' component={ this.renderInput } label='Enter an email' type='text' />
          <Field name='password' component={ this.renderInput } label='Enter a password' type='password' />
          <Field name='password_2' component={ this.renderInput } label='Repeat your password' type='password' />
          <button className='btn btn--primary'>Submit</button>
        </form>
        <div className='signup__social signup__side'>
          <button className='btn signup__fb'>
            Sign up with
            <FontAwesomeIcon className='signup__icon' icon={faFacebookSquare} />
          </button>
          <button className='btn signup__google'>
            Sign up with
            <FontAwesomeIcon className='signup__icon' icon={faGoogle} />
          </button>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signUpForm'
})(SignUp);
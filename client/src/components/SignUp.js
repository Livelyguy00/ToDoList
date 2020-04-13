import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Field, reduxForm } from 'redux-form';

class SignUp extends React.Component {
  onSubmit = formValues => {
    this.props.signUp(formValues);
  }

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
    return(
      <div className='signup'>
        <form className='form signup__side' onSubmit={ this.props.handleSubmit(this.onSubmit) }>
          <h2 className='heading-secondary u-margin-bottom-small'>Create Account</h2>
          <Field name='email' component={ this.renderInput } label='Enter an email' type='email' />
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

const validate = (formValues) => {
  const errors = {}
  if(!formValues.email){
    errors.email = 'You must enter your email';
  }
  if(!formValues.password){
    errors.password = 'You must enter your password'
  }
  if(!formValues.password_2){
    errors.password_2 = 'You must confirm your password'
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'signUpForm',
  validate
})(SignUp);

export default connect(null,
{ signUp }  
)(formWrapped);
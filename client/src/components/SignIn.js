import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../actions/index';

class SignIn extends React.Component{
  onSubmit = formValues => {
    this.props.signIn(formValues);
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
      <form className='form' onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <h2 className='heading-secondary u-margin-bottom-small'>Login</h2>
        <Field name='email' component={ this.renderInput } type='email' label='Enter an email'/>
        <Field name='password' component={ this.renderInput } type='password' label='Enter a password'/>
        <button className='btn btn--primary'>Submit</button>
      </form>
    );
  }
}

const formWrapped = reduxForm({
  form: 'signUpForm',
})(SignIn);

export default connect(null,
{ signIn }  
)(formWrapped);

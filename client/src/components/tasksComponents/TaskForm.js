import React from 'react';
import Input from '../Input';
import { NewTask } from '../../actions/index';
import { Field, reduxForm, reset } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class TaskForm extends React.Component{
  onSubmit = (state, dispatch) => {
    const userId = this.props.userId
    this.props.NewTask(state, userId)
    this.props.onSubmit()
    dispatch(reset('addTaskForm'));
  }

  render(){
    return(
      <div className='addTask__form'>
        <div className='addTask__form--labels'>
          <span className='addTask__form--label'>Name</span>
          <span className='addTask__form--label'>Description</span>
          <span className='addTask__form--label'>Date</span>
          <span className='addTask__form--label'>Important</span>
          <span className='addTask__form--label'>&nbsp;</span>
        </div>
        <form className='addTask__form--inputs' onSubmit={ this.props.handleSubmit(this.onSubmit) } action='/addtask' method='POST'>
          <Field type='text' name='name' component={ Input } />
          <Field type='text' name='description' component={ Input } />
          <Field type='date' name='date' component={ Input }  />
          <Field type='checkbox' name='important' component={ Input }/>
          <button type='submit' className='addTask__form--button'>
            <FontAwesomeIcon icon={ faPlusSquare } className='addTask__form--button-icon'/>
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  if(!values.name){
    errors.name = 'Required'
  }

  return errors
}

const mapStateToProps = state => {
  return {
    userId: state.auth.user
  }
}

const formWrapped = reduxForm({
  form: 'addTaskForm',
  validate
})(TaskForm)

export default connect(mapStateToProps,{
  NewTask
})(formWrapped)
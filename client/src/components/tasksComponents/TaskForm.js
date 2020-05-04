import React from 'react';
import Input from '../Input';
import { Field, reduxForm } from 'redux-form';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class TaskForm extends React.Component{
  onSubmit = (state) => {
    const userId = this.props.userId
    this.props.NewTask(state, userId)
  }

  render(){
    console.log(this.props)
    if(this.props.visible){
      return(
        <CSSTransition timeout={1000} classNames='fadeForm'>
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
              <Field name='date' component={ Input } type='date' />
              <Field type='checkbox' name='importance' component={ Input }/>
              <button type='submit' className='addTask__form--button'>
                <FontAwesomeIcon icon={ faPlusSquare } className='addTask__form--button-icon'/>
              </button>
            </form>
          </div>
        </CSSTransition>
      )
    }
    return null;
  }
}

export default reduxForm({
  form: 'addTaskForm',
})(TaskForm)
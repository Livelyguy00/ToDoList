import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TransitionGroup } from 'react-transition-group';

import Modal from '../Modal';
import AddTask from './AddTask';

class Tasks extends React.Component {
  render(){
    if(!this.props.isSignedIn){
      return(
        <TransitionGroup>
          <Modal 
            type='warning'
            text='To visit this page you must be Signed In'
            onDismiss={ () => history.push('/signin') }
          />
        </TransitionGroup>
      )
    }

    return(
      <div className='tasks'>
        <AddTask />
        <div className='task'>
          <input className='task__check' type='checkbox' id='succeed' name='succeed' />
          <label htmlFor='succeed' className='task__check--label'>
            <span className='task__check--custom'>
              <FontAwesomeIcon icon={ faCheck } className='task__check--icon'/>
            </span>
          </label>
          <span className='task__name'>Name of task</span>
          <span className='task__data'>Data</span>
          <FontAwesomeIcon icon={ faPencilAlt } className='task__icon' />
          <FontAwesomeIcon icon={ faShareAlt } className='task__icon' />
          <FontAwesomeIcon icon={ faTrashAlt } className='task__icon' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {})(Tasks)
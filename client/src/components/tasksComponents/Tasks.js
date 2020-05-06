import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { TransitionGroup } from 'react-transition-group';

import Task from './Task';
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
        <Task />
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
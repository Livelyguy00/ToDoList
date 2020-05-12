import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { TransitionGroup } from 'react-transition-group';
import { fetchTasks } from '../../actions/index';

import Task from './Task';
import Modal from '../Modal';
import AddTask from './AddTask';

class Tasks extends React.Component {
  componentDidMount(){
    console.log(this.props.userId)
  }

  renderWarning(){
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
  }

  render(){
    return(
      <div className='tasks'>
        { this.renderWarning() }
        <AddTask />
        <Task />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.user,
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps, {
  fetchTasks
})(Tasks)
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
    this.props.fetchTasks(this.props.userId)
  }

  renderWarning(){
    if(!this.props.isSignedIn){
      return(
        <TransitionGroup>
          <Modal 
            type='warning'
            text='To visit this page you must be Signed In'
            onDismiss={ () => history.push('/signin') }
            message='Click anywhere to sign in'
          />
        </TransitionGroup>
      )
    }
  }

  renderTasks(){
    return this.props.tasks.map(task => {
      return(
        <Task task={task} key={task._id}/>
      )
    })
  }

  render(){
    return(
      <div className='tasks'>
        { this.renderWarning() }
        <AddTask />
        <Task />
        {this.renderTasks()}
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
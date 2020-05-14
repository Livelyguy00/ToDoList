import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask, fetchTask } from '../../actions/index';

class DeleteTask extends React.Component {
  componentDidMount(){
    const taskId = this.props.match.params.id
    this.props.fetchTask(taskId)
  }

  onDeleteClick = () => {
    const taskId = this.props.task._id
    this.props.deleteTask(taskId)
  }

  renderActions(){
    return(
      <>
        <Link to='/tasks' className='btn btn--primary'>Cancel</Link>
        <button onClick={this.onDeleteClick} className='btn btn--warning'>Delete</button>
      </>
    )
  }

  render(){
    if(this.props.task){
      if(this.props.userId !== this.props.task.user){
        return(
          <Modal 
            type='warning'
            onDismiss = {() => history.push('/tasks')}
            text='This is not your task!'
            message='Click to see your tasks'
          />
        )
      }

      return(
        <Modal 
          type='card'
          onDismiss = {() => history.push('/tasks')}
          text='Are you sure you want delete this task?'
          actions={this.renderActions()}
          task={this.props.task}
        />
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.tasks.task,
    userId: state.auth.user
  }
}

export default connect(mapStateToProps,{
  fetchTask,
  deleteTask
})(DeleteTask)
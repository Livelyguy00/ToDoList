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

  onDeleteClick(){
    //this.props.deleteTask
  }

  renderActions(){
    return(
      <>
        <Link to='/tasks' className='btn btn--primary'>Cancel</Link>
        <button className='btn btn--warning'>Delete</button>
      </>
    )
  }

  render(){
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
}

const mapStateToProps = (state) => {
  return {
    task: state.tasks.task
  }
}

export default connect(mapStateToProps,{
  fetchTask,
  deleteTask
})(DeleteTask)
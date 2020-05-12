import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask, fetchTask } from '../../actions/index';

class DeleteTask extends React.Component {
  componentDidMount(){
    //this.props.fetchTask
  }

  onDeleteClick(){
    //this.props.deleteTask
  }

  renderActions(){
    return(
      <div className='actions'>
        <button className='btn btn--primary'/>
        <button className='btn btn--warning'/>
      </div>
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

export default DeleteTask
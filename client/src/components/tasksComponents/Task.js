import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Task extends React.Component {
  render(){
    if(this.props.task !== undefined){
      console.log(this.props.task)
      return(
        <div className='task'>
          <input className='task__check' 
            type='checkbox' 
            id={this.props.task._id} 
            name='succeed' 
          />
          <label htmlFor={this.props.task._id} className='task__check--label'>
            <span className='task__check--custom'>
              <FontAwesomeIcon icon={ faCheck } className='task__check--icon'/>
            </span>
          </label>
          <span className='task__name'>{this.props.task.name}</span>
          <span className='task__date'>{this.props.task.date}</span>
          <span className='task__iconBox'>
            <FontAwesomeIcon icon={ faPencilAlt } className='task__iconBox--icon' />
          </span>
          <span className='task__iconBox'>
            <FontAwesomeIcon icon={ faShareAlt } className='task__iconBox--icon' />
          </span>
          <Link to={`/tasks/delete${this.props.task._id}`} className='task__iconBox'>
            <FontAwesomeIcon icon={ faTrashAlt } className='task__iconBox--icon' />
          </Link>
        </div>
      )
    }
    return null;
  }
}

export default Task
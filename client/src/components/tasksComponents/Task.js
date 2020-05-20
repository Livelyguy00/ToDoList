import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faShareAlt, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Task extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     taskChecked: false
  //   }
  // }

  ifImportant(){
    if(this.props.task.important){
      return(
        <span className='task__iconBox'>
          <FontAwesomeIcon icon={faExclamation} className='task__iconBox--important'/>
        </span>
      )
    }
    return(
      <>
        &nbsp;
      </>
    )
  }

  render(){
    if(this.props.task !== undefined){
      return(
        <div className='task'>
          <input className='task__check' 
            onChange={e => this.props.onCheck(this.props.task._id)}
            type='checkbox' 
            id={this.props.task._id} 
            name='succeed' 
          />
          <label htmlFor={this.props.task._id} className='task__check--label'>
            <span className='task__check--custom'>
              <FontAwesomeIcon icon={ faCheck } className='task__check--icon'/>
            </span>
          </label>
          { this.ifImportant() }
          <span className='task__name'>{this.props.task.name}</span>
          <span className='task__date'>{this.props.task.date}</span>
          <span className='task__iconBox'>
            <FontAwesomeIcon icon={ faPencilAlt } className='task__iconBox--icon' />
          </span>
          <span className='task__iconBox'>
            <FontAwesomeIcon icon={ faShareAlt } className='task__iconBox--icon' />
          </span>
          <Link to={`/tasks/delete/${this.props.task._id}`} className='task__iconBox'>
            <FontAwesomeIcon icon={ faTrashAlt } className='task__iconBox--icon' />
          </Link>
        </div>
      )
    }
    return null;
  }
}

export default Task
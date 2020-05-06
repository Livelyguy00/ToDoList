import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component {
  render(){
    return(
      <div className='task'>
        <input className='task__check' type='checkbox' id='succeed' name='succeed' />
        <label htmlFor='succeed' className='task__check--label'>
          <span className='task__check--custom'>
            <FontAwesomeIcon icon={ faCheck } className='task__check--icon'/>
          </span>
        </label>
        <span className='task__name'>Name of task</span>
        <span className='task__data'>Data</span>
        <span className='task__iconBox'>
          <FontAwesomeIcon icon={ faPencilAlt } className='task__iconBox--icon' />
        </span>
        <span className='task__iconBox'>
          <FontAwesomeIcon icon={ faShareAlt } className='task__iconBox--icon' />
        </span>
        <span className='task__iconBox'>
          <FontAwesomeIcon icon={ faTrashAlt } className='task__iconBox--icon' />
        </span>
      </div>
    )
  }
}

export default Task
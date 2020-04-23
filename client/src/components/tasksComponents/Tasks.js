import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

import AddTask from './AddTask';

class Tasks extends React.Component {
  render(){
    return(
      <div className='tasks'>
        <AddTask />
        <div className='task'>
          <input className='task__check' type='checkbox' id='succeed' name='succeed' />
          <label for='succeed' className='task__check--label'>
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

export default Tasks
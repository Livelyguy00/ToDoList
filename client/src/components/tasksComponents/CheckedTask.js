import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import fetchCheckedTasks from '../../actions/index';

import Task from './Task';


class CheckedTask extends React.Component {
  componentDidMount(){
    
  }

  renderTasks = () => {
    if(this.state.tasks){
      return(
        <TransitionGroup>
          {this.state.tasks.map(task => (
            <CSSTransition
              key={task._id}
              timeout={500}
              classNames='task-animation-'
            >
              <Task task={task} key={task._id} onCheck={this.checkedTask} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )
    }
    return null;
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}

export default CheckedTask
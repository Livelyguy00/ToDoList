import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchCheckedTasks, uncheckTask } from '../../actions/index';

import Task from './Task';


class CheckedTask extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    this.props.fetchCheckedTasks(this.props.userId)
  }

  componentDidUpdate(prevProps){
    if(prevProps.tasks !== this.props.tasks){
      this.setState({
        tasks: this.props.tasks
      })
    }
  }

  checkedTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task._id !== id)
    })
    this.props.uncheckTask(id)
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
              <Task task={task} key={task._id} onCheck={this.checkedTask} checked={true} class='task task__checked'/>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )
    }
    return null;
  }

  render(){
    return(
      <div className='tasks'>
        { this.renderTasks() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.user,
    tasks: state.tasks.tasks
  }
}

export default connect( mapStateToProps, {
  fetchCheckedTasks,
  uncheckTask
})(CheckedTask)
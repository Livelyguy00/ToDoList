import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fetchTasks, checkTask } from '../../actions/index';

import Task from './Task';
import Modal from '../Modal';
import AddTask from './AddTask';

class Tasks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    this.props.fetchTasks(this.props.userId)
  }

  componentDidUpdate(prevProps){
    if(this.props.userId !== prevProps.userId){
      this.props.fetchTasks(this.props.userId)
    }
    if(this.props.tasks !== prevProps.tasks){
      this.setState({
        tasks: this.props.tasks
      })
    }
  }

  renderWarning(){
    if(!this.props.isSignedIn){
      return(
        <CSSTransition in={!this.props.isSignedIn} timeout={500} classNames='fadeModal'>
          <Modal 
            type='warning'
            text='To visit this page you must be Signed In'
            onDismiss={ () => history.push('/signin') }
            message='Click anywhere to sign in'
          />
        </CSSTransition>
      )
    }
  }

  checkedTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task._id !== id)
    })
    this.props.checkTask(id)
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
              <Task task={task} key={task._id} onCheck={this.checkedTask}/>
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
        { this.renderWarning() }
        <AddTask />
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
  fetchTasks,
  checkTask
})(Tasks)
import React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import TaskForm from './TaskForm';
import 'react-datepicker/dist/react-datepicker.css'

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: false
    };
  }

  toggleForm = () => {
    this.setState(state => ({ 
      isFormVisible: !state.isFormVisible,
    }));
  }

  render(){
    return(
      <div className='addTask'>
        <div className='addTask__visible'>
          <span className='addTask__visible--label'>Add new task</span>
          <label htmlFor='formVisible' className='addTask__visible--btn'>&nbsp;</label>
          <input type='checkbox' 
            className='addTask__visible--checkbox' 
            checked={ this.state.isFormVisible } 
            onChange={ this.toggleForm } 
            id='formVisible' 
          />
        </div>
        <CSSTransition 
          in={this.state.isFormVisible} 
          timeout={500} 
          classNames='fadeForm' 
          unmountOnExit
        >
          <TaskForm onSubmit={ this.toggleForm }/>
        </CSSTransition>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return{
    userId: state.auth.user
  }
}

export default connect(mapStateToProps,{})(AddTask);
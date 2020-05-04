import React from 'react'
import { connect } from 'react-redux';
import { NewTask } from '../../actions/index';
import { TransitionGroup } from 'react-transition-group';
import TaskForm from './TaskForm';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: false,
      isImportant: false
    };
  }

  toggleForm = () => {
    this.setState(state => ({ 
      isFormVisible: !state.isFormVisible,
    }));
  }

  renderDatepicker = (state) => {
    return(
      <DatePicker
        className="datepicker__input" 
        selected={ new Date() }
        onChange={ date => state.input.value = date }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    )
  }

  render(){
    console.log('rerender - main')
    console.log(this.state)
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
        <TransitionGroup>
          <TaskForm visible={ this.state.isFormVisible }/>
        </TransitionGroup>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return{
    userId: state.auth.user
  }
}

export default connect(mapStateToProps,{
  NewTask
})(AddTask);
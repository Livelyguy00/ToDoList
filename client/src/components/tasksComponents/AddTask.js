import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      date: null
    };
  }

  toggleCheckbox = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  renderDatepicker = (state) => {
    console.log(state)
    
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

  renderInput = ({ input, type }) => {
    return(
      <input 
        type={type} 
        className='addTask__form--input' 
        { ...input }
        autoComplete='off'
      />
    );
  }

  renderAddForm(){
    if(this.state.isChecked){
      return(
        <CSSTransition timeout={1000} classNames='fadeForm'>
          <div className='addTask__form'>
            <div className='addTask__form--labels'>
              <span className='addTask__form--label'>Name</span>
              <span className='addTask__form--label'>Description</span>
              <span className='addTask__form--label'>Date</span>
              <span className='addTask__form--label'>Important</span>
              <span className='addTask__form--label'>ADD</span>
            </div>
            <div className='addTask__form--inputs'>
              <Field type='text' name='name' component={ this.renderInput } label='Enter name of task'/>
              <Field type='text' name='description' component={ this.renderInput } label='Add description'/>
              <Field name='date' component={ this.renderDatepicker } label='Enter date'/>
              <Field type='checkbox' name='importance' component={ this.renderInput } label='Important!'/>
              <button type='submit' />
            </div>
          </div>
        </CSSTransition>
      )
    }
    return null;
  }

  render(){
    return(
      <div className='addTask'>
        <div className='addTask__visible'>
          <span className='addTask__visible--label'>Add new task</span>
          <label htmlFor='formVisible' className='addTask__visible--btn'>&nbsp;</label>
          <input type='checkbox' 
            className='addTask__visible--checkbox' 
            checked={ this.state.isChecked } 
            onChange={ this.toggleCheckbox } 
            id='formVisible' 
          />
        </div>
        <TransitionGroup>
          { this.renderAddForm() }
        </TransitionGroup>
      </div>
    )
  }
}

const formWrapped = reduxForm({
  form: 'addTaskForm',
})(AddTask);

export default connect(null,{})(formWrapped);
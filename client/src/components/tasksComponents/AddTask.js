import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
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

  onSubmit = (state) => {
    console.log(state)
  }

  toggleForm = () => {
    this.setState({ 
      isFormVisible: !this.state.isFormVisible,
    });
  }

  toggleImportant = () => {
    this.setState({ 
      isImportant: !this.state.isImportant,
    });
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

  renderImportant(){
    if(this.state.isImportant){
      return (
        <FontAwesomeIcon icon={faExclamation} className='addTask__form--checkbox-icon' />
      )
    }
  }

  renderInput = ({ input, type, label }) => {
    if(type === 'checkbox'){
      return(
        <span className='addTask__form--span'>
          <label htmlFor='important'>
            <span className='addTask__form--checkbox'>
              { this.renderImportant() }
            </span>
          </label>
          <input 
            id='important'
            type={type}
            checked={ this.state.isImportant } 
            onChange={ this.toggleImportant() }
            className='addTask__form--input u-visibility-hidden' 
            { ...input }
            autoComplete='off'
          />
        </span>
      )
    }

    return(
      <span className='addTask__form--span'>
        <input 
          type={type} 
          className='addTask__form--input' 
          { ...input }
          autoComplete='off'
        />
      </span>
    );
  }

  renderAddForm(){
    if(this.state.isFormVisible){
      return(
        <CSSTransition timeout={1000} classNames='fadeForm'>
          <div className='addTask__form'>
            <div className='addTask__form--labels'>
              <span className='addTask__form--label'>Name</span>
              <span className='addTask__form--label'>Description</span>
              <span className='addTask__form--label'>Date</span>
              <span className='addTask__form--label'>Important</span>
              <span className='addTask__form--label'>&nbsp;</span>
            </div>
            <form className='addTask__form--inputs' onSubmit={ this.props.handleSubmit(this.onSubmit) }>
              <Field type='text' name='name' component={ this.renderInput } />
              <Field type='text' name='description' component={ this.renderInput } />
              <Field name='date' component={ this.renderInput } type='date' />
              <Field type='checkbox' name='importance' component={ this.renderInput }/>
              <button type='submit' className='addTask__form--button'>
                <FontAwesomeIcon icon={ faPlusSquare } className='addTask__form--button-icon'/>
              </button>
            </form>
          </div>
        </CSSTransition>
      )
    }
    return null;
  }

  render(){
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
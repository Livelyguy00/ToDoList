import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'


class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  showForm = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  renderInput = ({ input, meta, label, type }) => {
    return(
      <div className='tasks__group'>
        <label className='tasks__label'>{label}</label>
        <input 
          type={type} 
          className='tasks__input' 
          { ...input }
          autoComplete='off'
        />
        <div className='tasks__message'>
          { meta.error }
        </div>
      </div>
    );
  }

  render(){
    return(
      <div className='addTask'>
        <div className='addTask__visible'>
          <span className='addTask__visible--label'>Add new task</span>
          <label for='formVisible' className='addTask__visible--btn'>&nbsp;</label>
          <input type='checkbox' 
            className='addTask__visible--checkbox' 
            checked={ this.state.isChecked } 
            onChange={ this.showForm } 
            id='formVisible' 
          />
        </div>
        <div className='addTask__form'>
          <Field type='text' name='name' component={ this.renderInput } label='Enter name of task'/>
          <Field type='text' name='description' component={ this.renderInput } label='Add description'/>
          <Field type='checkbox' name='importance' component={ this.renderInput } label='Important!'/>
        </div>
      </div>
    )
  }
}

const formWrapped = reduxForm({
  form: 'addTaskForm',
})(AddTask);

export default connect(null,{})(formWrapped);
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isImportant: false
    }
  }

  toggleImportant = () => {
    this.setState(state => ({ 
      isImportant: !state.isImportant,
    }))
  }

  renderImportant = () => {
    if(this.state.isImportant){
      return <FontAwesomeIcon icon={faExclamation} className='addTask__form--checkbox-icon' />;
    }
  }

  render(){
    const {
      input,
      meta,
      type
    } = this.props
    if(type === 'checkbox'){
      return(
        <span className='addTask__form--span'>
          <label htmlFor='important' >
            <span className='addTask__form--checkbox'>
              { this.renderImportant() }
            </span>
          </label>
          <input 
            id='important'
            {...input.onChange = this.toggleImportant }
            {...input.value = this.state.isImportant}
            {...input}
            type={type}
            className='addTask__form--input u-visibility-hidden'
          />
        </span>
      )
    }else{
      return(
        <span className='addTask__form--span'>
          <input 
            type={type} 
            className='addTask__form--input'
            autoComplete='off'
            {...input}
          />
          {meta.touched &&
            (meta.error && <span className='addTask__form--error'>{ meta.error }</span>)
          }
        </span>
      );
    }
  }
}

export default Input
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

class Input extends React.Component{
  renderImportant = (checked) => {
    if(checked){
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
              { this.renderImportant(input.value) }
            </span>
          </label>
          <input 
            id='important'
            type={type}
            {...input}
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
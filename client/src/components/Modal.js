import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
  const authWarning = () => {
    return(
      <div onClick={ props.onDismiss } className='modal'>
        <div onClick={(e) => e.stopPropagation()} className='warning u-absolute-centered'>
          { props.text }
          <p className='warning__dismiss'>{props.message}</p>
        </div>
      </div>
    )
  }

  const cardRender = () => {
    if(props.task !== undefined){
      return(
        <div onClick={ props.onDismiss } className='modal'>
          <div onClick={(e) => e.stopPropagation()} className='card u-absolute-centered'>
            <p className='card__text'>{ props.text }</p>
            <div className='card__content'>
              <p className='card__content--text'>{ props.task.name }</p>
              <p className='card__content--text'>{ props.task.description }</p>
              <p className='card__content--text'>{ props.task.date }</p>
            </div>
            <div className='card__actions'>
              { props.actions }
            </div>
          </div>
        </div>
      )
    }
  }

  if(props.type === 'warning'){
    return ReactDOM.createPortal(
      authWarning(),
      document.querySelector('#modal')
    )
  }
  if(props.type === 'card'){
    return ReactDOM.createPortal(
      cardRender(),
      document.querySelector('#modal')
    )
  }
}

export default Modal
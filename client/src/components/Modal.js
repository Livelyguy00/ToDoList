import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

const Modal = props => {
  const authWarning = () => {
    return(
      <CSSTransition timeout={500} classNames='fadeModal'>
        <div onClick={ props.onDismiss } className='modal'>
          <div onClick={(e) => e.stopPropagation()} className='warning u-absolute-centered'>
            { props.text }
            <p className='warning__dismiss'>{props.message}</p>
          </div>
        </div>
      </CSSTransition>
    )
  }

  const cardRender = () => {
    if(props.task !== undefined){
      return(
        <CSSTransition timeout={500} classNames='fadeModal'>
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
        </CSSTransition>
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
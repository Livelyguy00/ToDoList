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
            <p className='warning__dismiss'>Click anywhere to sign in</p>
          </div>
        </div>
      </CSSTransition>
    )
  }

  const cardRender = () => {
    console.log(props)
    return(
      <CSSTransition timeout={500} classNames='fadeModal'>
        <div onClick={ props.onDismiss } className='modal'>
          <div onClick={(e) => e.stopPropagation()} className='card u-absolute-centered'>
            <p className='card__text'>{ props.text }</p>
            <div className='card__content'></div>
            { props.actions }
          </div>
        </div>
      </CSSTransition>
    )
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
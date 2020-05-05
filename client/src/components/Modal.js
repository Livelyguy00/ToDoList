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
}

export default Modal
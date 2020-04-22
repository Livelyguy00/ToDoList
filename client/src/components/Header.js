import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { SignOut } from '../actions/index';

class Header extends React.Component{
  onSignOutClick(){
    this.props.SignOut()
  }

  loggedRender(){
    if(this.props.isSignedIn){
      return(
        <>
          <button className='header__button' onClick={() => this.onSignOutClick()}>Sign out</button>
        </>
      )
    }
    else{
      return(
        <>
          <Link to='/signup' className='header__button'>Sign up</Link>
          <Link to='/signin' className='header__button'>Sign in</Link>
        </>
      )
    }
  }

  renderMessage = message => {
    if(message){
      return(
        <div className='message__box'>
          <span className='message__content'>{message}</span>
        </div>
      )
    }
  }

  render(){
    return(
      <>
        <div className='header'>
          <div className='header__auth'>
            { this.loggedRender() }
          </div>
          <div className='header__nav'>

          </div>
        </div>
        { this.renderMessage(this.props.authMessage) }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isSignedIn: state.auth.isSignedIn,
    authMessage: state.auth.data
  }
}

export default connect(mapStateToProps,{ SignOut })(Header);

import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Header extends React.Component{
  loggedRender(){
    if(this.props.isSignedIn){
      return(
        <>
          <Link to='signout' className='header__button'>Sign out</Link>
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

export default connect(mapStateToProps,{})(Header);

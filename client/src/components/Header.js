import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <div className='header'>
        <div className='header__auth'>
          <Link to='/signup' className='header__button'>Sign up</Link>
        </div>
        <div className='header__nav'>

        </div>
      </div>
    );
  }
}

export default Header;

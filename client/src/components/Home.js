import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  renderLink(){
    if(this.props.isSignedIn){
      return (
        <>
          <h2 className='heading-secondary u-margin-top-medium u-text-white'>Menage your tasks now</h2>
          <Link to='/addtask' className='btn btn--primary'>Tasks</Link>
        </>
      )
    }
    else{
      return (
        <>
          <h2 className='heading-secondary u-margin-top-medium u-text-white'>Create your account now</h2>
          <Link to='/signup' className='btn btn--primary'>Sign up</Link>
        </>
      )
    } 
  }

  render(){
    return(
      <div className='home'>
        <h1 className='heading-primary u-text-white'>To Do List</h1>
        <h2 className='heading-secondary u-text-grey'>Organise your day easier</h2>
        <ul className='list'>
          <li className='list__el'>- Set your daily tasks</li>
          <li className='list__el'>- Set reminders</li>
          <li className='list__el'>- Share your tasks with other users</li>
        </ul>
        { this.renderLink() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps,{

})(Home)
import React from 'react';
import './Signin.css';
import  videoBg1 from '../../assets/pexels_videos_1851190 (2160p).mp4'
import { Link } from 'react-router-dom'; 

const Signin = () => {
  return (
  <div className='all'>
             <video src={videoBg1} autoPlay loop muted/>
             <Link to='/' className='back-button'>
         <h3>Go back</h3>
      </Link>
    <div className="login-box">
        
      <h2>Sign in</h2>
      <form>
        <div className="user-box"> 
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>

        </div>
        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    <Link className='account' to='/register'> dont have account</Link>
      </form>
    </div>
    </div>

  );
};

export default Signin;

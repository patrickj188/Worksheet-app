import React from 'react';
import './navJT.css'
// import Login from './Login/Login.js'

class NavJT extends React.Component {
    render() {
      return (
          <div>
            <ul className="header">
              <li><a href="/">Home</a></li>
              {/* <li><Login /></li> */}
              <li><a href="/user">User Page</a></li>
              {/* <li><a href="/settings">Settings</a></li> */}
              {/* <li><a href="/contact">Contact</a></li> */}
            </ul>
          </div>
      );
    }
  }
   
  export default NavJT;
import React, {Component} from 'react';
import './style.css'

class AppNavbar extends Component{

  render(){

    const {firstName,lastName}=this.props;

    console.log(this.props);

    return (
      <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <a className="navbar-brand" href="#">Dashboard</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Posts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Users</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a className="nav-link" href="#">{firstName+' '+lastName}</a></li>
          <li><a className="nav-link" href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
    </div>
    )
  }

}

export default AppNavbar;

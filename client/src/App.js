import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import DrawerLeft from './components/DrawerLeft.js';

class App extends Component{



  render(){

    const {firstName,lastName}=this.props.location.state;

    return(
      <div className="App">
        <AppNavbar firstName={firstName} lastName={lastName} />
        <DrawerLeft />
      </div>
    );
  }
}

export default App;

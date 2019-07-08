import React, { Component } from 'react';
import { FaCog,FaUser,FaPen } from "react-icons/fa";

class CssTut extends Component {

    testClick=()=>{

        alert('Test Button Clicked');
    }


    render() {
        return (
        <div className="mycontainer">
            <div className="mynav">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">About</a></li>
                        <li className="data">Logout</li>
                        <li className="data">Welcome Prateek</li>
                    </ul>
                </nav>
            </div>
            <div className="temp">
                <h2> <FaCog /> Dashboard <small>Manage your site </small></h2>
            </div>
            <section id="breadcrumb">
                <div>
                    <ol className="breadcrumb">
                        <li className="active">Dashboard</li>
                    </ol>
                </div>
            </section>
            <div className="menu">
                <div className="list-group">
                    <a href="#" className="list-group-item active">
                      <FaCog /> 
                      Dashboard
                    </a>
                    <a href="#" className="list-group-item">
                        <FaUser /> 
                        User
                        </a>
                    <a href="#" className="list-group-item"><FaPen /> Posts</a>
                </div>
            </div>
            <div className="content">
                <div className="content-heading">
                    <h2>Dashboard</h2>
                </div>
                <div className="content-body">
                    <p>Id enim ullamco et fugiat adipisicing.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default CssTut;


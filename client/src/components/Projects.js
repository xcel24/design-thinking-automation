import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { SSL_OP_NO_TLSv1_2 } from 'constants';

export default class Projects extends Component {

    state={
        pathName:''
    }

    handleClick=(e)=>{

        this.setState({
            pathName:e.target.getAttribute('id')
        });
    }


    render() {

        const projects=['project1','project2','project3'];

        return (
            <div className="container">
                <div className="pb-2 mt-4 mb-2 border-bottom">
                    <h1>Search Bar</h1>
                </div>
                <div className="row">
                    {projects.map((project,index)=>(
                    
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    <strong>{project.toUpperCase()}</strong>
                                </div>
                                <div className="card-body">
                                    <p>Aliquip excepteur id magna ad nostrud enim mollit 
                                    ipsum Lorem Lorem irure.</p>
                                </div>
                                <div className="card-footer">
                                    <Link 
                                        to={{
                                            pathname:`/projects/${project}`,
                                            state:{
                                                name:'project1'
                                            }
                                        }}>
                                        <button className="btn btn-primary ">
                                            Click Here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                ))}
                </div>                       
            </div>
        )
    }
}

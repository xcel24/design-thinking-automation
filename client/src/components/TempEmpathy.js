import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class TempEmpathy extends Component {
    render() {
        const{Think,Feel,Say,Do}=this.props.location.state;
        return (
            <>
                <div className="pb-2 mt-4 mb-2 border-bottom">
                    <h2>Empathy Map</h2>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Think</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Think.map((think,index)=>(
                                        <li 
                                        key={index}
                                        className="list-group-item">
                                            {think}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Feel</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Feel.map((feel,index)=>(
                                        <li 
                                        key={index}
                                        className="list-group-item">
                                            {feel}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Say</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Say.map((say,index)=>(
                                        <li 
                                        key={index}
                                        className="list-group-item">
                                            {say}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Do</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Do.map((Dos,index)=>(
                                        <li 
                                        key={index}
                                        className="list-group-item">
                                            {Dos}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={{
                        pathname:'/empathymap/empathynotes'
                        }}>
                        <button className="btn btn-info">Back</button>
                    </Link>
                </div>
            </>
        )
    }
}

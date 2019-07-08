import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Artefacts extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Persona Map</strong>
                            </div>
                            <div className="card-body">
                                <Link to={{pathname:'/personamaps'}}>
                                <button className="btn btn-primary">
                                    Click Here
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Empathy Map</strong>
                            </div>
                            <div className="card-body">
                                <Link to={{
                                    pathname:'personaempathy'
                                }}>
                                <button className="btn btn-primary">
                                    Click Here
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Journey Map</strong>
                            </div>
                            <div className="card-body">
                                <Link to={{
                                    pathname:'/journeymap'
                                }}>
                                <button className="btn btn-primary">
                                    Click Here
                                </button>
                                </Link>
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

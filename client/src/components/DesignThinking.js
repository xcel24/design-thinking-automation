import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class DesignThinking extends Component {
    render() {
        const {name}=this.props.location.state;
        console.log('I am',name);
        return (
            <>
                <div className="row">
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>EMAPTHY</strong>
                            </div>
                            <div className="card-body">
                                Fugiat fugiat non ut exercitation aliquip elit nisi 
                                officia nulla cillum amet tempor ullamco.
                            </div>
                            <div className="card-footer">
                                <Link to={{
                                    pathname:'/empathymap/empathynotes'
                                }}>
                                    <button className="btn btn-primary">
                                        Click Here
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>DEFINE</strong>
                            </div>
                            <div className="card-body">
                                Fugiat fugiat non ut exercitation aliquip elit nisi 
                                officia nulla cillum amet tempor ullamco.
                            </div>
                            <div className="card-footer">
                                <Link to={{
                                        pathname:'/define',
                                        state:{
                                            name:'project 1'
                                        }
                                    }}>
                                    <button className="btn btn-primary">
                                        Click Here
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>IDEATE</strong>
                            </div>
                            <div className="card-body">
                                Fugiat fugiat non ut exercitation aliquip elit nisi 
                                officia nulla cillum amet tempor ullamco.
                            </div>
                            <div className="card-footer">
                                    <button className="btn btn-primary">
                                        Click Here
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>PROTOTYPE</strong>
                            </div>
                            <div className="card-body">
                                Fugiat fugiat non ut exercitation aliquip elit nisi 
                                officia nulla cillum amet tempor ullamco.
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">
                                    Click Here
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>VALIDATE</strong>
                            </div>
                            <div className="card-body">
                                Fugiat fugiat non ut exercitation aliquip elit nisi 
                                officia nulla cillum amet tempor ullamco.
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">
                                    Click Here
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DesignThinking;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Define extends Component {
    render() {
        const {name}=this.props.location.state;
        console.log(name);
        return (
            <>
              <div className="row">
                  <div className="col-md-4">
                      <div className="card">
                          <div className="card-header text-center"><strong>Key Observations</strong></div>
                          <div className="card-body">
                                <button className="btn btn-primary">
                                    Click Here
                                </button>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                          <div className="card-header text-center"><strong>How Might We?</strong></div>
                          <div className="card-body">
                            <button className="btn btn-primary">
                                Click Here
                            </button>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                          <div className="card-header text-center"><strong>Insights</strong></div>
                          <div className="card-body">
                            <button className="btn btn-primary">
                                Click Here
                            </button>
                          </div>
                        </div>
                    </div>
                </div> 
                <div>
                    <Link to={{
                        pathname:`projects`
                    }}>
                        <button className="btn btn-info">Back</button>
                    </Link>
                </div> 
            </>
        )
    }
}

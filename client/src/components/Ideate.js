import React, { Component } from 'react';
import {FaPlus, FaTrash,FaPencilAlt} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';

export default class Ideate extends Component {

    state={
        rows:['row1','row1','row1','row1','row1',]
    }

    addRow=()=>{
        const{rows}=this.state;

        rows.push('new_row');

        this.setState({
            rows:rows
        });
    }

    deleteRow=()=>{
        const{rows}=this.state;

        rows.pop();

        this.setState({
            rows:rows
        });
    }

    handleEdit=(e)=>{
        console.log(e.target);
    }

    render() {

        const {rows}=this.state;

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Key Observations</th>
                            <th> Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row,index)=>(
                            <tr>
                            <td>{index+1}</td>
                            <td>Hello</td>
                            <td>
                                <Button onClick={e=>this.handleEdit(e)}>
                                    <FaPencilAlt />
                                </Button>
                            </td>
                        </tr>
                        ))}
                      </tbody>
                </table>
                <button 
                    className="btn btn-primary"
                    onClick={this.addRow}
                    >
                    <FaPlus size={32} />
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={this.deleteRow}
                    >
                    <FaTrash size={32} />
                </button>
                <button className="btn btn-success btn-lg float-right">Submit</button>
                <div className="float-right">
                <Link to={{
                        pathname:'/empathymap'
                        }}>     
                        <button className="btn btn-primary">
                            Go Back
                        </button>
                </Link>
            </div>
            </div>
        )
    }
}

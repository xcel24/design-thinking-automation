import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class JourneyMap extends Component{

    state={
        rows:['row1','row2']
    }

    saveData=()=>{

        html2canvas(document.querySelector('.table'))
        .then(canvas=>{

            //document.getElementById('pdf').parentNode.style.overflow='hidden';
            var image=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
             window.location.href=image;
        })

    }

    addRow=(e)=>{

        const {rows}=this.state;

        rows.push('new-row');

        this.setState({
            rows:rows
        });
    }

    addColumn=()=>{

        const column=document.querySelector('.my-table');

        let newColumn=document.createElement('th');
        newColumn.textContent='Random';

        column.appendChild(newColumn);
    }

    deleteRow=()=>{
        const {rows}=this.state;

        rows.pop();

        this.setState({
            rows:rows
        });
    }

    render(){

        const {rows}=this.state;

        const dummy_data=[
            {
                key1:"Goal",
                key2:"Email",
                key3:"random1",
                key4:"random2",
                key5:"random3"
            },
            {
                key1:"Goal",
                key2:"Email",
                key3:"random1",
                key4:"random2",
                key5:"random3"
            },
            {
                key1:"Goal",
                key2:"Email",
                key3:"random1",
                key4:"random2",
                key5:"random3"
            },
            {
                key1:"Goal",
                key2:"Email",
                key3:"random1",
                key4:"random2",
                key5:"random3"
            },
            {
                key1:"Goal",
                key2:"Email",
                key3:"random1",
                key4:"random2",
                key5:"random3"
            },
        ];

        return (
            <div>
               <table className="table table-striped table-hover table-bordered">
                   <thead>
                   <tr className="table-info my-table">
                       <th><textarea placeholder="Add Message"></textarea></th>
                       <th><textarea placeholder="Add Message"></textarea></th>
                       <th><textarea placeholder="Add Message"></textarea></th>
                       <th><textarea placeholder="Add Message"></textarea></th>
                       <th><textarea placeholder="Add Message"></textarea></th>
                       <th><textarea placeholder="Add Message"></textarea></th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows.map((item,index)=>(
                            <tr key={index}>
                            <td className="table-primary">
                                <textarea placeholder="Add Message"></textarea>
                            </td>
                            <td>
                                <textarea placeholder="Add Message"></textarea>
                            </td>
                            <td>
                                <textarea placeholder="Add Message"></textarea>
                            </td>
                            <td>
                                <textarea placeholder="Add Message"></textarea>
                            </td>
                            <td>
                                <textarea placeholder="Add Message"></textarea>
                            </td>
                            <td>
                                <textarea placeholder="Add Message"></textarea>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                <button className="btn btn-success" onClick={this.addRow}>
                    Add Row
                </button>
                <button className="btn btn-danger ml-3" onClick={this.addRow}>
                    Delete Row
                </button>
                <Link to={{
                    pathname:'/ideate'
                }}>
                    <button className="btn btn-success float-right">
                        Submit
                    </button>
                </Link>
                <div className="float-right mx-2">
                <Link to={{
                        pathname:'/artefacts'
                        }}>     
                        <button className="btn btn-primary">
                            Go Back
                        </button>
                </Link>
            </div>

            <div className="float-right mx-2">
                <button onClick={this.saveData} className="btn btn-primary">Download</button>
            </div>

            </div>
        )
    }
    
}

export default JourneyMap;

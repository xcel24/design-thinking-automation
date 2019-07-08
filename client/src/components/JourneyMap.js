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

        let mytable=document.querySelector('.table');
        //let dummy_row=document.querySelector('tr');

        let newRow=mytable.insertRow(-1);
        let newCell=newRow.insertCell(0);
        let newText = document.createTextNode('New bottom row');
        newCell.appendChild(newText);

        // const {rows}=this.state;

        // rows.push('new_row');

        // this.setState({
        //     rows:rows
        // });
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
                   <tr className="table-primary my-table">
                       <th  >Activities</th>
                       <th>EMR Alloted</th>
                       <th>Offer Mode</th>
                       <th>Counter Offer Received</th>
                       <th>PO Created</th>
                       <th>PO Modified</th>
                       <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows.map((item,index)=>(
                            <tr key={index}>
                            <td>
                               <p>Sunt officia pariatur consectetur deserunt aliquip. 
                                   Ad minim nulla elit ea adipisicing fugiat officia. 
                                   Dolore eu ipsum tempor esse fugiat est proident 
                                </p>
                            </td>
                            <td>
                               <p>Sunt officia pariatur consectetur deserunt aliquip. 
                                   Ad minim nulla elit ea adipisicing fugiat officia. 
                                   Dolore eu ipsum tempor esse fugiat est p
                                </p>
                            </td>
                            <td>
                               <p>Sunt officia pariatur consectetur deserunt aliquip. 
                                   Ad minim nulla elit ea adipisicing fugiat officia. 
                                   Dolore eu ipsum tempor esse fugiat est proident 
                                </p>
                            </td>
                            <td>
                               <p>Sunt officia pariatur consectetur deserunt aliquip. 
                                   Ad minim nulla elit ea adipisicing fugiat officia. 
                                   Dolore eu ipsum tempor esse fugiat est proident 
                                </p>
                            </td>
                            <td>
                               <p>Sunt officia pariatur consectetur deserunt aliquip. 
                                   Ad minim nulla elit ea adipisicing fugiat officia. 
                                   Dolore eu ipsum tempor esse fugiat est proident et proident occaecat aute ipsum ex. 
                                   Proident dolore et excepteur
                                </p>
                            </td>
                            <td>
                               <p>Sunt officia pariatur consectetur deserunt aliquip. 
                                   Ad minim nulla elit ea adipisicing fugiat officia. 
                                   Dolore eu ipsum tempor esse fugiat est proident et
                                </p>
                            </td>
                            <td>
                                <button
                                    id={index} 
                                    className="btn btn-info btn-sm" 
                                    onClick={(e)=>this.addRow(e)}>
                                    Add Row
                                </button>
                                <button
                                    id={index} 
                                    className="btn btn-info btn-sm" 
                                    onClick={this.addColumn}>
                                    Add Column
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                <Link to={{
                    pathname:'/ideate'
                }}>
                    <button className="btn btn-success">
                        Submit
                    </button>
                </Link>
                <div className="float-right">
                <Link to={{
                        pathname:'/artefacts'
                        }}>     
                        <button className="btn btn-primary">
                            Go Back
                        </button>
                </Link>
            </div>

            <div>
                <button onClick={this.saveData} className="btn btn-primary">Download</button>
            </div>

            </div>
        )
    }
    
}

export default JourneyMap;

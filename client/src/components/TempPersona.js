import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import {FaUserTie} from 'react-icons/fa';
import Spinner from './Spinner';
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class TempPersona extends Component {

    state={

        sliderValue_1:5,
        sliderValue_2:5,
        sliderValue_3:5

    }

    componentDidMount(){

        const {data}=this.props.location.state;

        this.setState({
            values:data
        });
    }

    showState=()=>{
        // const {type}=this.props.location.state;
        // console.log('Type is',type);

        const{temppersonas}=this.props.location.state;
        console.log(temppersonas);
    }

    handleInput=(e)=>{

        const name=e.target.getAttribute('name');
        
        this.setState({
            [name]:e.target.value
        })
    }

    saveData=()=>{

        //document.getElementById('pdf').parentNode.style.overflow='visible';

        html2canvas(document.querySelector('.row'))
        .then(canvas=>{

            //document.getElementById('pdf').parentNode.style.overflow='hidden';
            var image=canvas.toDataURL("image/png");
             //window.location.href=image;
            var doc=new jsPDF("l","mm","a4");
            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            doc.addImage(image,'JPEG',0,0,width,height);
            doc.save('test');
        })

    }

    render() {
    const {data,type,personas}=this.props.location.state;
    const Names=this.props.location.state.data;
    const{temppersonas}=this.props.location.state;

        if(data.length===50){
            return(<Spinner />)
        }

        else{
            return (
                <>
                    <div>
                        <h1 className="pb-2 mt-4 mb-2 border-bottom text-uppercase">{type}</h1>
                        <button
                        onClick={this.saveData} 
                        className="btn btn-primary">
                        Download
                        </button>
                    </div>   
    
                    <div className="container">
                        <div id="pdf" className="row">
                            <div className="col-md-4">
                                <div className="card ">
                                    <div className="card-header bg-primary text-white text-center">
                                    <h2> {type}</h2>
                                    </div>
                                     <div className="card-body">
                                        <FaUserTie size={200} className="container mb-4" />
                                        <div>
                                            <h4 className="text-primary mt-3">No of Users Interviewed: {data.length}</h4>
                                            <ul className="list-group">
                                                {data.map(item=>(
                                                    <li className="list-group-item ">{item}</li>
                                                ))}
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="card-footer text-primary">
                                        <h4>Avg Years of Experience:19</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header ">
                                            <strong>Responsibilities</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                    <li className="list-group-item">Item 1</li>
                                                    <li className="list-group-item">Item 2</li>
                                                    <li className="list-group-item">Item 3</li>
                                                    <li className="list-group-item">Item 4</li>
                                                    <textarea className="form-control" placeholder="Add Message"></textarea>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header ">
                                            <strong>Pain Points/Observations</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">Item 1</li>
                                                <li className="list-group-item">Item 2</li>
                                                <li className="list-group-item">Item 3</li>
                                                <li className="list-group-item">Item 4</li>
                                                <textarea className="form-control" placeholder="Add Message"></textarea>
                                            </ul>
                                        </div> 
                                    </div>
                            </div>
    
                            <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header"><strong>Key Experience Levers</strong></div>
                                        <div className="card-body">
                                            <h5>
                                                 Editable Lever 1
                                            </h5>
                                            <div className="slidecontainer">
                                                <input type="range" 
                                                    min="1" max="10" 
                                                    value={this.state.sliderValue_1} className="slider"
                                                    name="sliderValue_1"
                                                    id="myRange"
                                                    onInput={(e)=>this.handleInput(e)} />
                                            </div>
                                            <h5 className="mt-2">
                                                Editable Lever 2
                                            </h5>
                                            <div className="slidecontainer">
                                                <input type="range" 
                                                    min="1" max="10" 
                                                    value={this.state.sliderValue_2} className="slider"
                                                    name="sliderValue_2"
                                                    id="myRange"
                                                    onInput={(e)=>this.handleInput(e)} />
                                            </div>
                                            <h5 className="mt-2">
                                                Editable Lever 3 
                                            </h5>
                                            <div className="slidecontainer">
                                                <input type="range" 
                                                    min="1" max="10" 
                                                    value={this.state.sliderValue_3} className="slider"
                                                    name="sliderValue_3"
                                                    id="myRange"
                                                    onInput={(e)=>this.handleInput(e)} />
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header "><strong>Enablers</strong></div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">Item1</li>
                                                <li className="list-group-item">Item2</li>
                                                <li className="list-group-item">Item3</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-header "><strong>Suggested Features</strong></div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">Item1</li>
                                                <li className="list-group-item">Item2</li>
                                                <li className="list-group-item">Item3</li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={{
                            pathname:'/artefacts'
                        }}>
                            <button className="btn btn-info btn-lg">Back</button>
                        </Link>
                        <Link to={{
                            pathname:'/personaempathy',
                            state:{
                                personas:personas,
                                data:Names,
                                temppersonas:temppersonas

                            }
                        }}>
                            <button className="btn btn-primary btn-lg">Next</button>
                        </Link>

                        <button onClick={this.showState} className="btn btn-warning">Show state</button>
                    </div>
                </>
            )
        }

        
    }
}

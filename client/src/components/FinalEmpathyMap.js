import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class FinalEmpathyMap extends Component{

    state={
        Think:[],
        Feel:[],
        Say:[],
        Do:[]
    }

    componentDidMount(){

        let think=[],feel=[],say=[],Do=[];

        axios.get('/api/think')
            .then(res=>{
                for(var i=0;i<res.data.length;i++){
                    for(var j=0;j<res.data[i].think.length;j++){
                        think.push(res.data[i].think[j]);
                    }

                    for(var j=0;j<res.data[i].feel.length;j++){
                        feel.push(res.data[i].feel[j]);
                    }

                    for(var j=0;j<res.data[i].say.length;j++){
                        say.push(res.data[i].say[j]);
                    }

                    for(var j=0;j<res.data[i].do.length;j++){
                        Do.push(res.data[i].do[j]);
                    }
                }

                this.setState({
                    Think:think,
                    Feel:feel,
                    Say:say,
                    Do:Do
                });

                console.log(this.state);
            })
            .catch(err=>console.log(err))
    }

    saveData=()=>{

        //document.getElementById('pdf').parentNode.style.overflow='visible';

        html2canvas(document.querySelector('.row'))
        .then(canvas=>{

            //document.getElementById('pdf').parentNode.style.overflow='hidden';
            var image=canvas.toDataURL("image/png").replace("image/png","image/octet-strea");
            window.location.href=image;
            // var doc=new jsPDF("l","mm","a4");
            // var width = doc.internal.pageSize.getWidth();
            // var height = doc.internal.pageSize.getHeight();
            // doc.addImage(image,'JPEG',0,0,width,height);
            // doc.save('test');
        })

    }

    render(){

        const {Think,Feel,Say,Do}=this.state;

        return(
            <>
                <div>
                    <h1 className="pb-2 mt-4 mb-2 border-bottom">Final EmpathyMap</h1>
                </div>
                <button className="btn btn-primary" onClick={this.saveData}> Download</button>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center text-uppercase">
                                <strong>Think</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Think.map((think,index)=>{
                                        return(
                                            <li key={index} className="list-group-item">{think}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center text-uppercase">
                                <strong>Feel</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Feel.map((feel,index)=>{
                                        return(
                                            <li key={index} className="list-group-item">{feel}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center text-uppercase">
                                <strong>Say</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Say.map((say,index)=>{
                                        return(
                                            <li key={index} className="list-group-item">{say}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center text-uppercase">
                                <strong>Do</strong>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {Do.map((Todo,index)=>{
                                        return(
                                            <li key={index} className="list-group-item">{Todo}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }

};

export default FinalEmpathyMap;
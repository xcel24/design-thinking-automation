import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Link} from 'react-router-dom';

export default class ShowEmpathy extends Component {

    handleDownload=()=>{

        html2canvas(document.querySelector('.row'))
        .then(canvas=>{

            //document.getElementById('pdf').parentNode.style.overflow='hidden';
            var image=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
             window.location.href=image;
            // var doc=new jsPDF("l","mm","a4");
            // var width = doc.internal.pageSize.getWidth();
            // var height = doc.internal.pageSize.getHeight();
            // doc.addImage(image,'JPEG',0,0,width,height);
            // doc.save('test');
        })

    }

    render() {

        const {finalThink,finalFeel,finalSay,finalDo}=this.props.location.state;

        return (
            <>
                <div>
                    <h1 className="pb-2 mt-4 mb-2 border-bottom">
                        Emapthy Map
                        <span className="float-right">
                            <button
                                onClick={this.handleDownload} 
                                className="btn btn-primary btn-lg">
                                Download
                            </button>
                        </span>
                    </h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header text-center"><strong>THINK</strong></div>
                                <div className="card-body">
                                    <ul>
                                        {finalThink.map((think,index)=>{
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
                                <div className="card-header text-center"><strong>FEEL</strong></div>
                                <div className="card-body">
                                    <ul>
                                        {finalFeel.map((feel,index)=>{
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
                                <div className="card-header text-center"><strong>SAY</strong></div>
                                <div className="card-body">
                                    <ul>
                                        {finalSay.map((say,index)=>{
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
                                <div className="card-header text-center"><strong>DO</strong></div>
                                <div className="card-body">
                                    <ul>
                                        {finalDo.map((ido,index)=>{
                                            return(
                                                <li key={index} className="list-group-item">{ido}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Link to={{
                        pathname:'artefacts'
                    }}>
                        <button className="btn btn-primary">
                            Back
                        </button>
                    </Link>
                    <Link to={{
                        pathname:'/'
                    }}>
                        <button className="btn btn-primary">
                            Logout
                        </button>
                    </Link>
            </>
        )
    }
}

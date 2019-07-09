import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import {Link} from 'react-router-dom';

export default class LastEmpathyMap extends Component {

    state={

        value:[],
        Think:[],
        Feel:[],
        Say:[],
        Do:[],
        thinkCheck:[],
        feelCheck:[],
        sayCheck:[],
        doCheck:[],
        finalThink:[],
        finalFeel:[],
        finalSay:[],
        finalDo:[]
    }

    showState=()=>{

        const {temppersonas}=this.props.location.state;
        console.log(temppersonas);

    }

    componentDidMount(){
        const {temppersonas}=this.props.location.state;

        const Names=temppersonas.map(function(persona){
            return persona.name;
        });

        console.log(Names);

        const dummyData=['Xcel','Prateek'];

        const Think=[],Feel=[],Say=[],Do=[];
        
        Names.map(data=>{
            axios.get(`/api/think/${data}`)
                .then((res)=>{
                    const temp=[];
                    temp.push(res.data);

                    for(var i=0;i<temp.length;i++){
                        for(var j=0;j<temp[i].think.length;j++){
                            Think.push(temp[i].think[j]);
                        }
                        for(var j=0;j<temp[i].feel.length;j++){
                            Feel.push(temp[i].feel[j]);
                        }
                        for(var j=0;j<temp[i].say.length;j++){
                            Say.push(temp[i].say[j]);
                        }
                        for(var j=0;j<temp[i].do.length;j++){
                            Do.push(temp[i].do[j]);
                        }
                    }

                    console.log(this.state);
                    const tempCheck=[],tempFeel=[],tempSay=[],tempDo=[];

                    //Think Check
                    for(var i=0;i<Think.length;i++){
                        tempCheck[i]=false;
                    }

                    //Feel Check
                    for(var i=0;i<Feel.length;i++){
                        tempFeel[i]=false;
                    }

                    //Say Check
                    for(var i=0;i<Say.length;i++){
                        tempSay[i]=false;
                    }

                    //Do Check
                    for(var i=0;i<Do.length;i++){
                        tempDo[i]=false;
                    }

                    this.setState({
                        Think:Think,
                        Feel:Feel,
                        Say:Say,
                        Do:Do,
                        thinkCheck:tempCheck,
                        feelCheck:tempFeel,
                        sayCheck:tempSay,
                        doCheck:tempDo
                    });

                })
                .catch(err=>console.log(err))

                
        })


    }

    handleSubmit=()=>{

        const {thinkCheck,feelCheck,sayCheck,doCheck}=this.state;
        const {Think,Feel,Say,Do}=this.state;

        const finalThink=[],finalFeel=[],finalSay=[],finalDo=[];

        //Final Think
        for(var i=0;i<thinkCheck.length;i++){
            if(thinkCheck[i]===true){
                finalThink.push(Think[i]);
            }
        }

        //Final Feel
        for(var i=0;i<feelCheck.length;i++){
            if(feelCheck[i]===true){
                finalFeel.push(Feel[i]);
            }
        }


        //Final Say
        for(var i=0;i<sayCheck.length;i++){
            if(sayCheck[i]===true){
                finalSay.push(Say[i]);
            }
        }

        //Final Do
        for(var i=0;i<doCheck.length;i++){
            if(doCheck[i]===true){
                finalDo.push(Do[i]);
            }
        }

        this.setState({
            finalThink:finalThink,
            finalFeel:finalFeel,
            finalSay:finalSay,
            finalDo:finalDo
        });

        alert('Submitted Successfully');

    }

    handleClick=(e)=>{
        const name=e.target.getAttribute('name');
        const id=e.target.getAttribute('id');

        if(name==='Think'){
            this.state.thinkCheck[id]=!this.state.thinkCheck[id];
            this.forceUpdate();
        }else if(name==='Feel'){
          
            this.state.feelCheck[id]=!this.state.feelCheck[id];
            this.forceUpdate();

        }else if(name==='Say'){
            this.state.sayCheck[id]=!this.state.sayCheck[id];
            this.forceUpdate();

        }else if(name==='Do'){
            this.state.doCheck[id]=!this.state.doCheck[id];
            this.forceUpdate();

        }
        
    }

    render() {

        const {Think,Feel,Say,Do}=this.state;

        if(Think.length==0){
            return (<Spinner />)
        }else{
            return (
                <>
                    <div>
                        <h1 class="pb-2 mt-4 mb-2 border-bottom">Persona Empathy Map</h1> 
                        {/* <button onClick={this.showState}>Show State</button>            */}
                    </div>
    
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header text-center"><strong>THINK</strong></div>
                                <div className="card-body">
                                    <ul>
                                        {Think.map((think,index)=>{
                                            return(
                                                <li key={index} className="list-group-item">
                                                    {think}
                                                    <span className="float-right">
                                                        <input
                                                            checked={this.state.thinkCheck[index]}
                                                            name='Think' 
                                                            id={index} 
                                                            type="checkbox" 
                                                            onClick={(e)=>this.handleClick(e)} />
                                                    </span>
                                                </li>
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
                                        {Feel.map((feel,index)=>{
                                            return(
                                                <li key={index} className="list-group-item">
                                                    {feel}
                                                    <span className="float-right">
                                                        <input
                                                            checked={this.state.feelCheck[index]}
                                                            name='Feel'
                                                            id={index} 
                                                            onClick={e=>this.handleClick(e)}
                                                            type="checkbox" />
                                                    </span>
                                                </li>
                                                
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
                                        {Say.map((say,index)=>{
                                            return(
                                                <li key={index} className="list-group-item">
                                                    {say}
                                                    <span className="float-right">
                                                        <input
                                                            checked={this.state.sayCheck[index]}
                                                            name='Say'
                                                            id={index}
                                                            onClick={e=>this.handleClick(e)} 
                                                            type="checkbox" />
                                                    </span>
                                                </li>
                                                
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
                                        {Do.map((ido,index)=>{
                                            return(
                                                <li key={index} className="list-group-item">
                                                    {ido}
                                                    <span className="float-right">
                                                        <input
                                                            checked={this.state.doCheck[index]}
                                                            name='Do'
                                                            id={index}
                                                            onClick={e=>this.handleClick(e)} 
                                                            type="checkbox" />
                                                    </span>
                                                </li>
                                                
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-success">Submit</button>
                    <Link to={{
                        pathname:'showEmpathyMap',
                        state:{
                            finalThink:this.state.finalThink,
                            finalFeel:this.state.finalFeel,
                            finalSay:this.state.finalSay,
                            finalDo:this.state.finalDo
                        }
                    }}>
                        <button className="btn btn-primary">
                            Next
                        </button>
                    </Link>
                </>
            )
        }

            
    }
}

import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


var temp=[];

class FinalPersonaMap extends Component {

    state={

    }

    componentDidMount(){

        const {data,names}=this.props.location.state;

        console.log('Data is ',data);
        
    
    for(var i=0;i<names.length;i++){

        temp[i]=data.filter(function(item){
            return item.persona==names[i]
        }).map(function(item){

            return item.name
        });
    }


    this.setState({
        values:temp
    });

    console.log(temp);
}

    showstate=()=>{
        const {names}=this.props.location.state;
        const{distributedpersonas}=this.props.location.state;
        console.log(names,distributedpersonas);
        //console.log('Personas are',this.props.location.state.names);
    }


    render() {
        const {names}=this.props.location.state;
        const personas=this.props.location.state.names;
        const{distributedpersonas}=this.props.location.state;
        return (
            <>
                {names.map((name,index)=>(
                    <div class="jumbotron text-center">
                        <div class="container">
                            <h1>{name}</h1>
                            <Link to={{
                                pathname:`/finalpersonamap/${name}`,
                                state:{
                                    data:temp[index],
                                    type:name,
                                    personas:personas,
                                    temppersonas:distributedpersonas
                                }
                            }}>
                                <button className="btn btn-primary">Read More</button>
                            </Link>
                        </div>
                    </div>

                ))}

            <button onClick={this.showstate} className="btn btn-warning">Show State</button>
                
            </>
        )
    }
}

export default FinalPersonaMap;

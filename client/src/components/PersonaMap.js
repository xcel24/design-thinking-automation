import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './persona.css';
import {Link } from 'react-router-dom';
import {FaUserPlus,FaTrash} from 'react-icons/fa';
import axios from 'axios';

class PersonaMap extends Component {

    state={
        names:[],
        designers:[]
    }

    componentDidMount(){
        axios.get('/api/designers')
            .then(res=>{
                const data=res.data.map(item=>{
                    return item.name;
                })

            this.setState({
                designers:data
            })
            
            })
            .catch(err=>{
                console.log(err)
            })
    }

    add=()=>{
        
        this.setState({
            names:[...this.state.names,""]
        })
    }

    handleChange=(e,index)=>{
        this.state.names[index]=e.target.value;
        this.setState({
            names:this.state.names
        })
    }

    handleRemove=(index)=>{
        this.state.names.splice(index,1);
        console.log(this.state.names);

        this.setState({
            names:this.state.names
        })
    }

    handleSubmit=(e)=>{
        console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <h1>Persona Page</h1>
                <h2>Identify Persona's</h2>
                <br />
                {this.state.names.map((name,index)=>(
                <div>
                <TextField
                    id={toString(index)}
                    label="Add Persona"
                    margin="normal"
                    value={name}
                    onChange={(e)=>this.handleChange(e,index)}
                  />
                <Button 
                    onClick={()=>this.handleRemove(index)} > 
                    <FaTrash />
                </Button>
                </div>
                
                ))}
                <br />
                <Button onClick={(e)=>this.add(e)}><FaUserPlus /></Button>
            <hr />
            <Link to={{
                pathname:'/distribute',
                state:{
                    name:this.state.names,
                    persons:this.state.designers
                }
            }}>
            <Button 
                onClick={(e)=>this.handleSubmit(e)} 
                color="primary" variant="contained"> 
                Submit
            </Button>
            </Link>
            {this.state.names.length?<div>
                <ul>
                    {this.state.names.map(name=>(
                        <li>{name}</li>
                    ))}
                </ul>

            </div>:null}
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

export default PersonaMap;

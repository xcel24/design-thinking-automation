import React, { Component } from 'react'
import './distribute.css';
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import Item from './Item';
import Target from './Target';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link } from 'react-router-dom';

var temp1=[];
var fetcheddata,fetchedname;

class Distribute extends Component {

    state={
        names:[],
        persons:[],
        anchorEl:null,
        values:[
        ],
        distributedpersonas:[]
    }

    componentDidMount(){

        const {name}=this.props.location.state;
        const{persons}=this.props.location.state;  

        this.setState({
            names:name,
            persons:persons
        })

    }

    showState=()=>{

        var tempData=[];

        const {name}=this.props.location.state;
        const {values}=this.state;

        for(var i=0;i<name.length;i++){
           
            tempData[i]=values.filter(function(value){
                return value.persona===name[i];
            })
        } 
        
        this.setState({
            distributedpersonas:tempData
        })
    }



    handleClose=(e)=>{
             
        console.log(e.target.getAttribute('name'));
        this.state.values[fetcheddata] = {
            id:fetcheddata,
            name:fetchedname,
            persona:e.target.getAttribute('name'),
        };
        this.forceUpdate();

        this.setState({
            anchorEl:null
        });
        
    }

    handleClick=(e)=>{

        console.log(e.currentTarget.getAttribute('name'));
        fetcheddata=e.currentTarget.getAttribute('id');
        fetchedname=e.currentTarget.getAttribute('name');
        this.setState({
            anchorEl:e.currentTarget
        })
    }

    displayState=()=>{
        console.log(this.state);
    }

    render() {
        const {names}=this.state;
        const {persons}=this.state;
        return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Persona</TableCell>
                        <TableCell>Tagged Persona</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {persons.map((person,index)=>(
                        <TableRow>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{person}</TableCell>
                            <TableCell>
                            <Button 
                                color="secondary" 
                                variant="contained" 
                                id={index+1} 
                                onClick={e=>this.handleClick(e)}
                                name={person}
                                >
                                Choose
                            </Button> 
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                                >
                                
                                {names.map(name=>(
                                    <MenuItem onClick={e=>this.handleClose(e)} name={name}>{name}</MenuItem>
                                ))}                               
                            </Menu>
                            </TableCell>
                            <TableCell>{
                                     this.state.values[index+1]?this.state.values[index+1].persona:null
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link to={{
                pathname:'/finalpersonamap',
                state:{
                    data:this.state.values,
                    names:this.props.location.state.name,
                    distributedpersonas:this.state.distributedpersonas
                }    
            }}>
                <Button  
                    color="primary" 
                    variant="contained">
                    Submit
                </Button>
            </Link>
            <Button onClick={this.showState}>showState </Button>
            <Button onClick={this.displayState}>Display State </Button>
        </div>          
        )
    }
}

export default Distribute;

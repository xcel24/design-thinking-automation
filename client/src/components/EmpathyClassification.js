import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';


var fetcheddata='';

export default class EmpathyClassification extends Component {

    state={
        data:[],
        anchorEl:null,
        values:[
            {
                key:'',
                val:''
            }
        ]
    }

    componentDidMount(){
        const{statements}=this.props.location.state;
        this.setState({
            data:statements
        });
}
    showState=()=>{
        const{name,office}=this.props.location.state;
        console.log(name,office);
    }

    handleClick=(e)=>{

        fetcheddata=e.currentTarget.getAttribute('id');
        this.setState({
            anchorEl:e.currentTarget
        })

    }

    handleClose=(e)=>{

        console.log('FetchedData',fetcheddata);

        this.state.values[fetcheddata] = e.target.getAttribute('name');
        this.forceUpdate();

        this.setState({
            anchorEl:null,           
        })
    }

    handleSubmit=()=>{

        const {data}=this.state;
        const {values}=this.state;
        const{name,office}=this.props.location.state

        const Think=[],Feel=[],Say=[],Do=[];

        for(let i=1;i<=values.length;i++){
            if(values[i]=='Think'){
                Think.push(data[i-1])
            }
            else if(values[i]=='Feel'){
                Feel.push(data[i-1])
            }
            else if(values[i]=='Say'){
                Say.push(data[i-1])
            }
            else if(values[i]=='Do'){
                Do.push(data[i-1])
            }
        }

        this.setState({
            Think:Think,
            Feel:Feel,
            Say:Say,
            Do:Do
        });

        const field={
            project:'Project 1',
            name:name,
            office:office,
            think:Think,
            feel:Feel,
            say:Say,
            do:Do
        }

        axios.post('/api/think',field)
        .then(res=>{
            console.log(res);
            alert('Submitted Successfully');
        })
        .catch(err=>console.log(err))
        
    }


    render() {

        const {data}=this.state;
        const {values}=this.state;

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Script</th>
                            <th>Action</th>
                            <th>Tagged Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((userData,index)=>(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{userData}</td>
                            <td>
                                <div>
                                    <button 
                                    id={index+1}
                                    className="btn btn-primary" 
                                    onClick={e=>this.handleClick(e)}>
                                        Choose
                                    </button> 
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={this.state.anchorEl}
                                        keepMounted
                                        open={Boolean(this.state.anchorEl)}
                                        onClose={this.handleClose}
                                        >
                                        <MenuItem onClick={e=>this.handleClose(e)} name="Think">Think</MenuItem>
                                        <MenuItem onClick={e=>this.handleClose(e)} name="Feel">Feel</MenuItem>
                                        <MenuItem onClick={e=>this.handleClose(e)} name="Say">Say</MenuItem>
                                        <MenuItem onClick={e=>this.handleClose(e)} name="Do">Do</MenuItem>
                                    </Menu>  
                                </div>
                            </td>
                            <td>{values[index+1]}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                <div>
                    <button 
                    className="btn btn-success btn-lg" 
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>

                <div>
                    <Link to={{
                        pathname:'/tempempathy',
                        state:{
                            Think:this.state.Think,
                            Feel:this.state.Feel,
                            Say:this.state.Say,
                            Do:this.state.Do,
                        }
                    }}>
                        <button className="btn btn-primary">
                            Next
                        </button>
                    </Link>                  
                </div>
                <button className="btn btn-warning" onClick={this.showState}>Show State</button>

            </div>
        )
    }
}

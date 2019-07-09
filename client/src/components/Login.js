import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@material-ui/core';


class Login extends Component {

    state={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleChange=(e)=>{

        const type=e.target.getAttribute('id');

        this.setState({
            [type]:e.target.value
        })

    }

    handleSubmit=(e)=>{

        e.preventDefault();

        const {firstName,lastName,email,password}=this.state;

        const fields={
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }

        axios.post('/api/users',fields)
            .then((res)=>{
                console.log(res);
                alert('Submitted Successfully');
            })
            .catch(err=>console.log(err))
    }

    getData=(e)=>{

        e.preventDefault();


        const{email,password}=this.state;

        console.log(email);

        axios.get(`/api/users/${email}`)
            .then((res)=>{

                const temppassword=res.data.password;
                const {firstName,lastName}=res.data;

                if(temppassword===password){
                    alert('Login Successfully');
                    this.props.history.push({
                        pathname:'/projects',
                        state:{
                            firstName:firstName,
                            lastName:lastName
                        }
                    });
                }else{
                    alert('Wrong Credentials');
                }
            })
            .catch(err=>console.log(err))
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pb-2 mt-4 mb-2 border-bottom">
                                <strong>New User Sign Up</strong>
                            </div>
                                <form>
                                     <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                                onChange={e=>this.handleChange(e)} 
                                                id="firstName"
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Add First Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                id="lastName"
                                                onChange={e=>this.handleChange(e)} 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Add Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                id="email"
                                                onChange={e=>this.handleChange(e)} 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="Add Email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                id="password"
                                                onChange={e=>this.handleChange(e)} 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Add Password" />
                                        </div>
                                        <button
                                            onClick={e=>this.handleSubmit(e)} 
                                            type="submit" 
                                            className="btn btn-success">
                                            Submit
                                        </button>
                                    </form>
                        </div>
                        <div className="col-md-6">
                            <div className="pb-2 mt-4 mb-2 border-bottom">
                                <strong>Login Here</strong>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        id="email"
                                        onChange={e=>this.handleChange(e)} 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Add Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        id="password"
                                        onChange={e=>this.handleChange(e)} 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" />
                                </div>
                                <div className="checkbox">
                                    <label>
                                    <input type="checkbox" />
                                    <span className="ml-2">Remember Me</span>
                                    </label>    
                                </div>
                                <button
                                    onClick={e=>this.getData(e)} 
                                    type="submit" 
                                    className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Login;

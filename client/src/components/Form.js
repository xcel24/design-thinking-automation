import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';


class Form extends Component{

    state={
        id:'',
        name:'',
        age:'',
        designation:'',
        office:''
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
    }

    showState=()=>{
        console.log(this.props);
    }

    render(){
        return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label>ID</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder='Id' 
                        value={this.state.id }
                        onChange={e=>this.setState({id:e.target.value})} 
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder='Name' 
                        value={this.state.name }
                        onChange={e=>this.setState({name:e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder='Age' 
                        value={this.state.age }
                        onChange={e=>this.setState({age:e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>Designation</label>
                    <input
                        type="text"
                        className="form-control" 
                        placeholder='Designation' 
                        value={this.state.designation }
                        onChange={e=>this.setState({designation:e.target.value})} 
                    />
                </div>
                <div className="form-group">
                    <label>Office</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder='Office' 
                        value={this.state.office }
                        onChange={e=>this.setState({office:e.target.value})} 
                    />
                </div> 

            <button 
                onClick={e=>this.onSubmit(e)}
                className="btn btn-success"
            > 
                Submit 
            </button> 
            <button 
                onClick={this.props.handleClose}
                className="btn btn-danger"
            > 
                Close Form
            </button> 
            </form>
        </div>
        )
    }
};

export default Form;
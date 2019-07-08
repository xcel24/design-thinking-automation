import React,{ Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import DrawerEmpathy from './DrawerEmpathy';
import {Link} from 'react-router-dom';


class NotesSession extends Component{

    state={
        statements:[],
        spacing:'20',
        isOpen:false,

    };

    componentDidMount(){
        let temp=[];
        let finalResult=[];
        const params = this.props.match.params;
        axios.get('/api/session/'+params.name+'/'+params.office)
              .then(res=>{
                  temp=res.data;
                  console.log(temp);
                  //this.setState({statements:res.data});
                for(var i=0;i<temp.length;i++){
                    for(var j=0;j<temp[i].data.length;j++){
                        finalResult.push(temp[i].data[j])
                    }
                }
                  console.log('I executed');
                  console.log(finalResult);

                  this.setState({
                      statements:finalResult
                  })
              });
              
            
     }




      changer=()=>{

        this.setState({
            isOpen:!this.state.isOpen
        });

      }

      shower=()=>{
          const tempParams=this.props.match.params;
        if(this.state.isOpen){
            return(
                <DrawerEmpathy isOpen={this.state.isOpen} name={tempParams.name} office={tempParams.office} />
            );
        }
    }

    showState=()=>{
        const {name,office}=this.props.match.params;
        console.log(name,office);
    }

      
    render(){
        const {name,office} = this.props.match.params;
        const show=null;

        return(
            <div>
            <Paper style={{padding:20}}>
                <h1 className="pb-2 mt-4 mb-2 border-bottom">
                    Name:{name} | Office:{office}
                </h1>
                <br />
                <i><u><h1>Q&A Session</h1></u></i>
                       <ul className="list-group">
                            {this.state.statements.map(statement=>(
                                <div>
                                    <li className="list-group-item">{statement}</li>
                                </div>
                                )
                            )}
                        </ul>
            </Paper>
            <div className="container mt-3">
                <Link to={{
                    pathname:'/empathyclassification',
                    state:{
                        statements:this.state.statements,
                        name:name,
                        office:office
                    }
                    }}>
                    <button
                        className="btn btn-primary"> 
                        Validate
                    </button>
                </Link>
            </div>
            <button className="btn btn-warning" onClick={this.showState}>Show State</button>
            {this.shower()}
          </div>
        );
    }
};

export default NotesSession;
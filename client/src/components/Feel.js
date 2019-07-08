import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Modal from 'react-modal';
import Form from './Form';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import { throws } from 'assert';
import FinalEmpathyMap from './FinalEmpathyMap';

class Feel extends Component{

   
    state={
        interview:[
        ],
        temp:[],
        check:[],
        finalList:[],
        showComponent:false
    }


    componentDidMount(){
      const parsedName=this.props.match.params.name;
      const parsedOffice = this.props.match.params.office;
      axios.get('/api/session/'+parsedName+'/'+parsedOffice)
      .then(res=>{
          console.log("Feeling",res.data);
          const questions=this.state.temp;
          var count=1;
          for(var i=0;i<res.data.length;i++){
            for(var j=0;j<res.data[i].data.length;j++){
              //console.log(res.data[i].data[j]);
               questions.push({id:count,question:res.data[i].data[j]});
               this.state.check.push({id:count,val:false});
               count++;
            }
              
              
          }

          this.setState({temp:questions});
      });
      
    }


    setter=(e)=>{
      const id=e.target.id-1;
      const tempState=this.state.check[id]
      //const tempState=this.state.checkedA;

      this.state.check[id].val = !this.state.check[id].val;
      this.forceUpdate()
    }

    showState=()=>{
      
      const tempList=[];
      const tempState=this.state.check;

      for(var i=0;i<tempState.length;i++){
        if(tempState[i].val==true){
          tempList.push(this.state.temp[i].question);
          //console.log(this.state.temp[i].question);
        }
      }

      this.setState({
        finalList:tempList
      });

    }

    finalee=()=>{

    const parsedName=this.props.match.params.name;
    const parsedOffice = this.props.match.params.office;

      const fields={
        id:1,
        name:parsedName,
        office:parsedOffice,
        feel:this.state.finalList
      }

      axios.post('/api/feel',fields)
      .then(res=>{
        console.log(res);
      });
      
      alert('Submitted Successfully');
      
    }



    
  render(){

    return (
    <div>
        <Paper>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Script</TableCell>    
                <TableCell>Checkbox</TableCell>          
            </TableRow>
            </TableHead>
            <TableBody>
            {this.state.temp.map(temp => (
                <TableRow>
                <TableCell align="left">{temp.id}  </TableCell>
                <TableCell align="left">
                    <ul>
                        <li>{temp.question}</li>
                        <li>{temp.answer}</li>
                    </ul> 
                </TableCell>
                <TableCell>
                <Checkbox 
                  id={temp.id} 
                  checked={this.state.check[temp.id-1].val}  
                  onChange={(e)=>this.setter(e)}
                />
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Button onClick={this.showState}> Submit </Button>
        <Button onClick={this.finalee}> Final List </Button>
        </Paper> 
    </div>
    );
  }
    
};

Feel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Feel;

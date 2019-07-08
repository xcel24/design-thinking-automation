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
import {Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class EmpathyNotes extends Component{

   

    state={
        designers:[
            
        ],
        isActive:false
    }

    toggleModal=()=>{
      this.setState({
        isActive:!this.state.isActive 
      })
    }

    componentDidMount(){
      axios.get('/api/designers')
      .then(res=>{
          console.log(res);
          this.setState({designers:res.data});
      });
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }


    onSubmit=(fields)=>{

      this.setState(state=>({
        designers:[...state.designers,fields]
    }));

    axios.post('/api/designers',fields)
            .then(res=>{
              console.log(res);
            });

    }

    handleChange=(e,name)=>{

      console.log(e.target.attributes.getNamedItem('office').value);

      let files = e.target.files;
      const designername = e.target.name;
      const designeroffice = e.target.attributes.getNamedItem('office').value;

      //Reading the File
      let reader = new FileReader();

      reader.readAsText(files[0]);

      let temp=[];

      reader.onload = (e)=>{
        temp=e.target.result;

        temp=temp.split(".");
        console.log("Text data",temp);
         


        var stringseperator=[]
        for(var i=0;i<temp.length;i++){
          stringseperator.push({key:"Other",value:temp[i].split(" ")});
        }

        for(var i=0;i<stringseperator.length;i++){
          for(var j=0;j<stringseperator[i].value.length;j++){
            if(stringseperator[i].value[j]=="Hello"){
              stringseperator[i].key="Hello"
            }
          }
        }

        console.log(stringseperator);

        //console.log(stringseperator);

        let fields={
          name:designername,
          office:designeroffice,
          data:temp
        }
  
        axios.post('/api/session',fields)
              .then(res=>{
                console.log(res);
              });
      }

      alert('Submitted Succesfully');
    }
    
    handleClick=()=>{
      console.log('hello');
    }
    
  render(){
    const url="http://localhost:3000/notessession/";
    const {designers}=this.state;
    return (
    <>
      <div className="pb-2 mt-4 mb-2 border-bottom">
        <h1>Interview Details 

          <Link to={{
            pathname:'/artefacts'
          }}>
            <small className="float-right">Artefacts</small>
          </Link>
        </h1>
      </div>
        <div>
            <Button color="dark" onClick={this.toggleModal}><AddIcon /></Button>
            <Modal 
              isOpen={this.state.isActive} 
              onRequestClose={this.toggleModal}
              >
              <Form 
                onSubmit={fields=>this.onSubmit(fields)}
                handleClose={this.toggleModal} />
            
            </Modal>
            <Paper>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="left">Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Designation</TableCell>
                    <TableCell align="left">Office</TableCell>   
                    <TableCell align="left">Click To Add Data</TableCell>              
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.designers.map(designer => (
                    <TableRow key={designer.id}>
                    <TableCell align="left">{designer.id}</TableCell>
                    <TableCell component="th" scope="row">
                    <a href={url+designer.name +'/'+designer.office}>{designer.name}</a>
                    </TableCell>
                    <TableCell align="left">{designer.designation}</TableCell>
                    <TableCell align="left">{designer.office}</TableCell>
                    <TableCell align="left">
                      <input type="file" 
                      name={designer.name}
                      office={designer.office}
                      onChange={(e)=>this.handleChange(e)}
                      />               
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </Paper> 

            <Link to={{
              pathname:'/empathymap'
            }}>     
              <button className="btn btn-primary">
                Go Back
              </button>
            </Link>

        </div>
    </>
    );
  }
    
};

EmpathyNotes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmpathyNotes);

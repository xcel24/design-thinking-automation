import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

var temp=[];

class FinalThink extends Component {

  state={
    check:[],
    data:[],

  }

   componentDidMount(){

    console.log('Props',this.props.think);
    // const {think}=this.props;

    // var count=1;

    // for(var i=0;i<think.length;i++){
    //   temp.push({id:count,val:false});
    //   count++;
    // }

    this.setState({
      check:this.props.check_think,
    });

   }


  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  showState=()=>{

    console.log(this.state);
  }

  setter=(e)=>{

    console.log(e.target);
     const id=e.target.id;

     //const tempState=this.state.check[id]; 

     this.state.check[id] = !this.state.check[id];
     this.forceUpdate()
  }

  submit=()=>{
    var final_think=[];

    
  }

  render() {
      const think=this.props.think;
      const {check}=this.state;
    return (
       <div>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Think
            </Typography>
            <Button onClick={this.continue} color="inherit">Next</Button>
            </Toolbar>
        </AppBar>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Script</TableCell>
                    <TableCell>CheckBox</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {think.map((item,index)=>(
                    <TableRow>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>
                    <Checkbox 
                      id={index}
                      checked={this.props.check_think[index]}
                      onChange={(e)=>this.setter(e)}
                    />
                    </TableCell>
                </TableRow>
                ))}

            </TableBody>
        </Table>

    <Button onClick={this.showState}> Show State</Button>
    <Button color="primary" variant="contained" onClick={this.submit}> Submit</Button>

    </div> 
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FinalThink;

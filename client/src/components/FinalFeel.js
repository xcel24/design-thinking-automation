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

class FinalFeel extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  showState=()=>{
    console.log('Feel here',this.props.feel);
  }

  render() {

    const feel = this.props.feel;
    
    return (
        <div>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Feel
            </Typography>
            <Button onClick={this.continue} color="inherit">Next</Button>
            <Button onClick={this.back} color="inherit">Back</Button>
            </Toolbar>
        </AppBar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Script</TableCell>
              <TableCell>Checkbox</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feel.map((item,index)=>(
              <TableRow>
              <TableCell>{index+1}</TableCell>
              <TableCell>{item}</TableCell>
              <TableCell><Checkbox /></TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button onClick={this.showState}> Show State</Button>


    </div>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FinalFeel;

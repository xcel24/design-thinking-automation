import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink ,
    Container
    } from 'reactstrap';

var sessionData=[];

var fetcheddata='';


class Tempthink extends Component{

    state={
        anchorEl:null,
        values:[
            {
                key:'',
                val:''
            }
        ],
        think:[],
        data:[]
    }

    componentDidMount(){
         const parsedName=this.props.match.params.name;
         const parsedOffice = this.props.match.params.office;
        axios.get('/api/session/'+parsedName+'/'+parsedOffice)
        .then(res=>{
            //console.log(res.data);
            var count=1;
            for(var i=0;i<res.data.length;i++){
              for(var j=0;j<res.data[i].data.length;j++){
                 sessionData.push(res.data[i].data[j]);
                 count++;
                  }
             }

            var {data}=this.state;
  
            this.setState({
                data:sessionData
            });
        });

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

    tempState=()=>{
        console.log(this.state);
    }

    showState=()=>{

        // console.log(this.props.match.params);

        const tempdata=this.state.values;
        const tempThink=[];
        const tempFeel=[];
        const tempSay=[];
        const tempDo=[];

        console.log('Tempdata is ',tempdata);

        const {data}=this.state;

        for(var i=1;i<=tempdata.length;i++){
            if(tempdata[i]=='Think'){
                tempThink.push(data[i-1]);
            }

            else if(tempdata[i]=='Feel'){
                tempFeel.push(data[i-1]);
            }

            else if(tempdata[i]=='Say'){
                tempSay.push(data[i-1]);
            }

            else{
                tempDo.push(data[i-1]);
            }
        }

        const parsedName=this.props.match.params.name;
        const parsedOffice = this.props.match.params.office;

        const fields_think={
            id:1,
            name:parsedName,
            office:parsedOffice,
            think:tempThink,
            key:'think'
          }

        

          axios.post('/api/think',fields_think)
          .then(res=>{
          console.log(res);
        });

    
        alert('Submitted Successfully');
        
    }

    render(){

        const parsedName=this.props.match.params.name;
        const parsedOffice = this.props.match.params.office;

        const url="http://localhost:3000/notessession/"+parsedName+"/"+parsedOffice;
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                    <NavbarBrand href="/">Home Page</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink href={url}>
                            Back
                        </NavLink>
                        </NavItem>
                    </Nav>
                </Container>
          </Navbar>
            <Paper>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Script</TableCell>
                        <TableCell>Choose</TableCell>
                        <TableCell>Tagged Data</TableCell> 
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map((val,index)=>(
                            <TableRow id={index}>
                            <TableCell>
                                {index+1}
                            </TableCell>
                            <TableCell>
                               {val} 
                            </TableCell>
                            <TableCell>
                            <Button color="secondary" variant="contained" id={index+1} onClick={e=>this.handleClick(e)}>
                                Choose
                            </Button> 
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
                            </TableCell>
                            <TableCell>
                                {this.state.values[index+1]}
                            </TableCell>
                            
                        </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
                <Button 
                    color="primary" 
                    variant="contained" 
                    onClick={this.showState}> 
                    Submit
                </Button>
                <button 
                    className="btn btn-success"
                    onClick={this.tempState}> 
                    Show State
                </button>
            </Paper>
        </div>
        )
    }


};

export default Tempthink;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class DrawerEmpathy extends React.Component {
  state = {
    left: this.props.isOpen,
    name:this.props.name,
    office:this.props.office,
    data:['think','feel','say','do'],
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render() {
    const { classes } = this.props;
    console.log('I am here');
    console.log(this.props);
    const url="http://localhost:3000";
    const generateempathymap = "generateempathymap";

    const sideList = (
      <div className={classes.list}>
        <List>
          {this.state.data.map((text, index) => (
            <a href={url+'/tempthink/'+this.props.name+'/'+this.props.office}><ListItem button key={text}> 
             <ListItemText primary={text}   />
            </ListItem>
            </a>
          ))}
          <a href={url+'/'+generateempathymap+'/'+this.props.name+'/'+this.props.office}><ListItem button key={'Generate Empathy Map'}>
          <ListItemText primary={'Generate Empathy Map'} />
            </ListItem>
            </a>
        </List>
        <Divider />
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {this.state.data.map((text, index) => (
            <ListItem
              id={text} 
              button key={text} >
              <ListItemText primary={text}  />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerEmpathy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerEmpathy);

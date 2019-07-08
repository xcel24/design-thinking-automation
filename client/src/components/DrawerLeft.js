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

class DrawerLeft extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Project1', 'Project2', 'Project3', 'Project4'].map((text, index) => (
            <ListItem button key={text}>
              <a href="http://localhost:3000/empathymap"><ListItemText primary={text} /></a>
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Project1', 'Project2', 'Project3', 'Project4'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Projects</Button>
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

DrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerLeft);

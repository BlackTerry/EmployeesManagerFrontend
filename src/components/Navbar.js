import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  }
};

const NavBar = (props) => {
  const { classes } = props;
  return(
    <div>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Employees Management Application.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
//export default NavBar;
export default withStyles(styles)(NavBar);

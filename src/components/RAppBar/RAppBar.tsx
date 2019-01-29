import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import {  View } from '../../types';

const styles = createStyles({
  appbar: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
  typography: {
    color: 'white',
    flexGrow: 1,
    paddingBottom: '1%',
    paddingTop: '1%',
  },
});

export interface IRAppBarProps extends WithStyles<typeof styles> {
  setView: (view: View) => void;
}

const RAppBar: React.SFC<IRAppBarProps> = (props: IRAppBarProps): JSX.Element => {
  const [resumeSelected, setResumeSelected] = React.useState(false);
  interface Iroute {
    name: string;
    view: View;
  }

  const viewMapping: Iroute[] = [
    { name: 'Home',       view: View.Home },
    { name: 'Experience', view: View.Experience },
    { name: 'Technology', view: View.Technology },
  ];

  const menuItems = viewMapping.map((route: Iroute, i: number) => {
    return (
      <MenuItem key={i} onClick={
        () => {
          setResumeSelected(false);
          props.setView(route.view);
        }
      }>
        {route.name}
      </MenuItem>
    );
  });

  return (
    <div className={props.classes.root}>
      <AppBar position='static'>
        <Toolbar className={props.classes.appbar}>
          <div id='appBarLeft'>
            <Typography className={props.classes.typography} variant='h2' >
              Demitri Swan
            </Typography>
            <Typography className={props.classes.typography} variant='subtitle1'>
              Software | Infrastructure | Continuous Delivery
            </Typography>
          </div>
          <div id='appBarRight'>
            <Button
              id='ResumeButton'
              onClick={(_) => setResumeSelected(true)}
            >
              <Typography className={props.classes.typography} variant='h6'>
                Resume
              </Typography>
            </Button>

            <Menu
              id='Resume'
              anchorEl={document.getElementById('ResumeButton')}
              open={resumeSelected}
              onClose={() => setResumeSelected(false)}
            >
              {menuItems}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(RAppBar);

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InvertColors from '@material-ui/icons/InvertColors';

import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import { IState, View } from '../../types';
import RExperience from '../../views/RExperience';
import RHome from '../../views/RHome';

const styles = (theme: Theme) => createStyles({
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
    { name: 'Experience', view: View.Experience },
    { name: 'Home',       view: View.Home },
  ];

  const menuItems = viewMapping.map((route: Iroute) => {
    return (
      <MenuItem onClick={
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
              onClick={(event) => setResumeSelected(true)}
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

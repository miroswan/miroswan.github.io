import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InvertColors from '@material-ui/icons/InvertColors';

import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import { IState, View } from '../types';

const styles = createStyles({
  appbar: {
    backgroundColor: 'black',
    paddingLeft: '3em',
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
  disableResumeButtonSelected: () => void;
  getResumeButtonSelected: () => boolean;
  setResumeButtonSelected: (event: any) => void;
  setTheme: () => void;
  setView: (view: View) => void;
}

const RAppBar: React.SFC<IRAppBarProps> = (props: IRAppBarProps): JSX.Element => {
  const {
    classes,
    disableResumeButtonSelected,
    getResumeButtonSelected,
    setResumeButtonSelected,
    setTheme,
    setView,
  } = props;

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.appbar}>
          <Typography className={classes.typography} variant='h2' >
            Demitri Swan
          </Typography>
          <Button id='MenuButton' onClick={setResumeButtonSelected}>
            Resume
          </Button>

          <Menu
            id='Resume'
            anchorEl={(event: any) => document.getElementById('MenuButton')}
            open={getResumeButtonSelected()}
            onClose={disableResumeButtonSelected}
          >
            <MenuItem onClick={
              () => {
                disableResumeButtonSelected();
                setView(View.Experience);
              }
            }>Experience</MenuItem>
            <MenuItem onClick={
              () => {
                disableResumeButtonSelected();
                setView(View.Technology);
              }
            }>Technology</MenuItem>
            <MenuItem onClick={
              () => {
                disableResumeButtonSelected();
                setView(View.Contact);
              }
            }>Contact</MenuItem>
            <MenuItem onClick={
              () => {
                disableResumeButtonSelected();
                setView(View.Home);
              }
            }>Home</MenuItem>
          </Menu>

          <IconButton className={classes.menuButton} color='inherit' onClick={setTheme}>
            <InvertColors />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(RAppBar);

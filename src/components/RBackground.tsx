import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Particles from 'react-particles-js';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = createStyles({
  background: {
    position: 'fixed',
    zIndex: -100,
  },
  root: {
    marginLeft: '65%',
  },
});

export interface IRBackgroundProps extends WithStyles<typeof styles> {}

const RBackground = (props: IRBackgroundProps): JSX.Element => {
  return (
    <div className={props.classes.root}>
      <Particles className={props.classes.background} width='100vw' height='100vh' params={
        {
          particles: {
            number: {
              value: 150,
            },
          },
        }
      } />
    </div>
  );
};

export default withStyles(styles)(RBackground);

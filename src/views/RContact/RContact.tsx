import * as React from 'react';
import ReactLoading from 'react-loading';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import RBackground from '../../components/RBackground';

const styles = createStyles({
  gridContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '40%',
    minHeight: '50vh',
  },
  root: {
    flexGrow: 1,
  },
});

export interface IRContactProps extends WithStyles<typeof styles> {}

const RContact: React.SFC<IRContactProps> = (props: IRContactProps): JSX.Element => {
  return (
    <div className={props.classes.root}>
      <RBackground />
      <div className={props.classes.gridContainer} >
        <div>
          <Link href='tel:781-731-5511'>
            <Typography align='center' variant='h5'>
              781.731.5511
            </Typography>
          </Link>
        </div>
        <br />
        <div>
          <Link href='mailto: demitriswan@gmail.com'>
            <Typography align='center' variant='h5'>
              demitriswan at gmail dot com
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(RContact);

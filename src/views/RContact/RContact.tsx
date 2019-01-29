import * as React from 'react';
import ReactLoading from 'react-loading';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import RBackground from '../../components/RBackground';

const styles = createStyles({
  container: {
    marginLeft: '1.75em',
    marginRight: '40%',
    marginTop: '1.75em',
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
      <div className={props.classes.container} >
        <div>
          <Link href='tel:781-731-5511'>
            <Typography align='left' variant='h5'>
              781.731.5511
            </Typography>
          </Link>
        </div>
        <br />
        <div>
          <Link href='mailto: demitriswan@gmail.com'>
            <Typography align='left' variant='h5'>
              demitriswan at gmail dot com
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(RContact);

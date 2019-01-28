import * as React from 'react';
import ReactLoading from 'react-loading';

import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  gridContainer: {
    minHeight: '50vh',
  },
  loading: {
    margin: 'auto',
  },
  root: {
    height: '100%',
    textAlign: 'center',
    width: '100%',
  },
});

export interface IRNotSupportedProps extends WithStyles<typeof styles> {
  msg: string;
}

class RNotSupported extends React.Component<IRNotSupportedProps, {}> {
  constructor(props: IRNotSupportedProps) {
    super(props);
  }

  public componentDidMount() {
    const sleep = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    sleep(4000).then(() => {
      window.location.href = 'https://www.linkedin.com/in/demitriswan';
    });
  }

  public render = (): JSX.Element => {
    return (
      <Grid
        className={this.props.classes.gridContainer}
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <Grid item xs={5} >
          <div>
            <Typography align='center' variant='h5'>
              {this.props.msg} not yet supported
            </Typography>
          </div>
          <br />
          <div>
            <Typography align='center' variant='h5'>
              Redirecting to LinkedIn
            </Typography>
          </div>
          <div>
            <ReactLoading
              className={this.props.classes.loading}
              type='bubbles'
              color='white'
              height={'50%'}
              width={'50%'}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RNotSupported);

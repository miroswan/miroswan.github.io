import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = createStyles({
  resumeVideo: {
    minHeight: '100%',
    minWidth: '100%',
    position: 'fixed',
  },
});

export interface IRHomeProps extends WithStyles<typeof styles> {}

const RHome: React.SFC<IRHomeProps> = (props: IRHomeProps): JSX.Element => {
  const { classes } = props;
  return (
    <video className={classes.resumeVideo} autoPlay muted loop id='resumeVideo'>
      <source src='./resumeVideo.mp4' type='video/mp4'/>
    </video>
  );
};

export default withStyles(styles)(RHome);

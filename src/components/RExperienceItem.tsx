import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  company: {
    fontSize: '24px',
  },
  date: {},
  experienceItem: {},
  location: {},
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  position: {
    fontWeight: 'bold',
  },
  positions: {},
  responsibility: {
    listStyleType: 'circle',
  },
});

export interface IPosition {
  name: string;
  from: Date;
  location: string;
  to: Date;
  responsibilities: string[];
}

export interface IExperienceItem {
  company: string;
  positions: IPosition[];
}

type IRExperienceItemProps = WithStyles<typeof styles> & IExperienceItem;

const renderPosition = (position: IPosition, classes: any): JSX.Element => {
  const items: JSX.Element[] = position.responsibilities.map((responsibility: string) => {
    return (
      <li className={classes.responsibility}>
        <Typography variant='body1'>{responsibility}</Typography>
      </li>
    );
  });

  return (
    <div>
      <div className={classes.position}>
        <Typography variant='subtitle2'>{position.name}</Typography>
      </div>
      <Typography variant='subtitle2'>{renderDate(position.from)} - {renderDate(position.to)}</Typography>
      <Typography variant='subtitle2'>{position.location}</Typography>
      <ul>
        {items}
      </ul>
    </div>
  );
};

const renderDate = (d: Date): string => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
};

const RExperienceItem: React.SFC<IRExperienceItemProps> = (props: IRExperienceItemProps): JSX.Element => {
  const positions: JSX.Element[] = props.positions.map((position: IPosition) => {
    return renderPosition(position, props.classes);
  });
  return (
    <div className={props.classes.experienceItem}>
      <div className={props.classes.company}>
        <Typography variant='h5'>{props.company}</Typography>
      </div>
      <div className={props.classes.positions}>
        {positions}
      </div>
    </div>
  );
};

export default withStyles(styles)(RExperienceItem);

import * as React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = createStyles({
  domain: {
    fontSize: '24px',
  },
  root: {
    flexGrow: 1,
  },
});

export interface IRTechList {
  domain: string;
  items: string[];
}

export type IRTechListProps = IRTechList & WithStyles<typeof styles>;

const RTechList: React.SFC<IRTechListProps> = (props: IRTechListProps): JSX.Element => {
  const items: JSX.Element[] = [
    (
      <ListItem key={0}>
        <Typography variant='title'>
          {props.domain}
        </Typography>
      </ListItem>
    ),
  ].concat(props.items.map((item: string, i: number) => {
    return (
      <ListItem key={i + 1}>
        <Typography variant='body1'>
          {item}
        </Typography>
      </ListItem>
    );
  }));

  return (
    <div className={props.classes.root}>
      <List>
        {items}
      </List>
    </div>
  );
};

export default withStyles(styles)(RTechList);

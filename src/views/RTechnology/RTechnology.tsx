import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import RBackground from '../../components/RBackground';
import RTechList, { IRTechList } from '../../components/RTechList';

const techLists: IRTechList[] = [
  {
    domain: 'Languages',
    items: ['Python', 'Go', 'Ruby', 'TypeScript', 'Bash', 'Scala'],
  },
  {
    domain: 'Containers',
    items: ['Mesos', 'Kubernetes', 'Docker'],
  },
  {
    domain: 'Configuration Management',
    items: ['Chef', 'Ansible', 'Python'],
  },
  {
    domain: 'CI/CD',
    items: ['ConcourseCI', 'Drone', 'TravisCI', 'AppVeyor', 'Jenkins'],
  },
  {
    domain: 'Operating Systems',
    items: ['Linux', 'MacOS'],
  },
  {
    domain: 'Frontend',
    items: ['React', 'Material-UI', 'Webpack'],
  },
  {
    domain: 'Architecture Components',
    items: ['Kafka', 'Consul', 'Zookeeper'],
  },
  {
    domain: 'Engineering References',
    items: [
      'Algorithms - Robert Sedgewick',
      'Design Patterns - GoF',
      'Modern Operating Systems - Andrew S. Tanenbaum',
      'Site Reliability Engineering - Google',
      'Systems Performance - Brendan Gregg',
    ],
  },
];

const styles = createStyles({
  grid: {
    marginRight: '40%',
  },
  root: {
    flexGrow: 1,
  },
});

export interface IRTechnologyProps extends WithStyles<typeof styles> {}

const RTechnology: React.SFC<IRTechnologyProps> = (props: IRTechnologyProps): JSX.Element => {
  const gridItems: JSX.Element[] = techLists.map((item: IRTechList, i: number) => {
    return (
      <Grid item key={i}>
        <RTechList domain={item.domain} items={item.items} />
      </Grid>
    );
  });

  return (
    <div className={props.classes.root}>
      <RBackground />
      <div className={props.classes.grid}>
        <Grid container spacing={8}>
          {gridItems}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(RTechnology);

import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import RBackground from '../../components/RBackground';

const assetsPath: string = '../../../assets/';

interface ICardData {
  category: string;
  items: string[];
  image: string;
}

const techList: ICardData[] = [
  {
    category: 'Languages',
    image: assetsPath + 'golang.png',
    items: ['Python', 'Go', 'Ruby', 'TypeScript', 'Bash', 'Scala'],
  },
  {
    category: 'Containers',
    image: assetsPath + 'k8.png',
    items: ['Mesos', 'Kubernetes', 'Docker'],
  },
  {
    category: 'Configuration Management',
    image: assetsPath + 'ansible.png',
    items: ['Chef', 'Ansible', 'Python'],
  },
  {
    category: 'CI/CD',
    image: assetsPath + 'concourse.png',
    items: ['ConcourseCI', 'Drone', 'TravisCI', 'AppVeyor', 'Jenkins'],
  },
  {
    category: 'Operating Systems',
    image: assetsPath + 'ubuntu.png',
    items: ['Linux', 'MacOS'],
  },
  {
    category: 'Frontend',
    image: assetsPath + 'react.png',
    items: ['React', 'Material-UI', 'Webpack'],
  },
  {
    category: 'Architecture Components',
    image: assetsPath + 'kafka.png',
    items: ['Kafka', 'Consul', 'Zookeeper'],
  },
  {
    category: 'Knowledge Base',
    image: assetsPath + 'algo.png',
    items: [
      'Algorithms - Robert Sedgewick',
      'Design Patterns - GoF',
      'Modern Operating Systems - Andrew S. Tanenbaum',
      'Site Reliability Engineering - Google',
      'Systems Performance - Brendan Gregg',
      'Unix and Linux System Administration Handbook',
    ],
  },
];

const styles = createStyles({
  card: {
    width: '100%',
  },
  cardContainer: {
    marginBottom: '2%',
    marginLeft: '1.75em',
    marginRight: '40%',
    marginTop: '2%',
  },
  media: {
    display: 'block',
    height: 200,
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
});

export interface IRTechnologyProps extends WithStyles<typeof styles> {}

const RTechnology: React.SFC<IRTechnologyProps> = (props: IRTechnologyProps): JSX.Element => {
  const cards: JSX.Element[] = techList.map((item: ICardData, i: number) => {
    return (
      <Grid key={i} item xs={4}>
        <div className={props.classes.card}>
          <img className={props.classes.media} src={item.image} />
          <Typography gutterBottom variant='h5' component='h2' align='center'>
            {item.category}
          </Typography>
          <Typography variant='body1' align='center'>
            {item.items.join(' | ')}
          </Typography>
        </div>
      </Grid>
    );
  });

  return (
    <div className={props.classes.root}>
      <RBackground />
      <div className={props.classes.cardContainer}>
        <Grid justify='center' container spacing={8}>
        {cards}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(RTechnology);

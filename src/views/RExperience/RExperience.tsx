import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';

import RBackground from '../../components/RBackground';
import RExperienceItem from '../../components/RExperienceItem';
import { IRExperienceItem } from '../../components/RExperienceItem';

const experience: IRExperienceItem[] = [
  {
    company: 'DigitalOcean',
    positions: [
      {
        from: new Date(2018, 11),
        location: 'Remote',
        name: 'Software Engineer',
        responsibilities: [
          'Develop and maintain a suite of microservices (Go) which comprise the internal timeseries platform',
          'Develop automation tooling in Go, Python, Bash',
          'Deployments to Kubernetes and Docker systems',
          'Code Review',
          'Learning: Typescript, React',
        ],
        to: new Date(),
      },
      {
        from: new Date(2017, 2),
        location: 'Remote',
        name: 'Infrastructure Engineer',
        responsibilities: [
          'Develop tools and services in Python, Go, Ruby, Scala, and Bash',
          'Leverage distributed systems technologies such as Akka and Spark for HDFS tooling',
          'Develop cookbooks and workflow automation tools supporting Chef infrastructure and thousands of bare metal systems worldwide',
          'Develop Ansible playbooks, modules, and associated tooling to support deployment automation for infrastructure services',
          'Develop tools and workflows for test automation',
          'Provide operational support for Chef, Mesos, and services within the Mesos ecosystem',
          'Code review',
        ],
        to: new Date(2018, 11),
      },
    ],
  },
  {
    company: 'Moz',
    positions: [
      {
        from: new Date(2015, 3),
        location: 'Seattle, WA',
        name: 'DevOps Engineer - Application Platforms',
        responsibilities: [
          'Design and support of log aggregation infrastructure, comprised of Mesos, Marathon, Kafka, Logstash, Rsyslog, Zookeeper and Kibana',
          'Support of services and tooling that improve the Mesos experience',
          'Consultation for technology decisions',
          'Develop tools and services in Python, Ruby, Bash, and Go as needed',
          'Chef and Ansible development with automated testing',
          'Contribute bug fixes and feature additions for open source projects',
          'Resolve systems and network related issues on Linux nodes',
          'Participate in a production on-call rotation',
          'Communicate with various teams to coordinate automation projects',
          'Review infrastructure related pull requests',
          'Have fun writing code every day',
          'Learning something new every day',
        ],
        to: new Date(2017, 2),
      },
    ],
  },
  {
    company: 'Apollo Education Group',
    positions: [
      {
        from: new Date(2014, 0),
        location: 'Seattle, WA',
        name: 'Systems Administrator',
        responsibilities: [
          'Resolve issues on production systems',
          'Multi-datacenter code deployments',
          'Develop and contribute to tools written in Python, Bash and Go',
          'Leverage Ansible and Vagrant to provision repeatable, automated development environments',
          'Spearheaded efforts for a dynamic container-based platform via Docker, Mesos, Marathon, Consul, Consul-Template and Registrator',
          'Maintain legacy Ruby code tied to Jenkins build jobs',
          'Build and optimize Jenkins pipelines',
          'Configure pools and virtual IPs on F5 LTMs',
          'Configure and build out server infrastructure in AWS, VMWare, and private cloud with Puppet and Foreman',
          'Leverage MCollective to work on multitudinous nodes concurrently',
          'Configure and monitor various servers: Apache, Tomcat, Jbossweb, Zookeeper, Mesos, Consul, Nagios, etc',
          'Configure CQ/AEM CMS nodes as needed',
          'Participate in a 24/7 on-call rotation',
        ],
        to: new Date(2015, 4),
      },
    ],
  },
  {
    company: 'Code and Theory',
    positions: [
      {
        from: new Date(2012, 11),
        location: 'New York City',
        name: 'IT Support',
        responsibilities: [
          'Provided technical Mac support for 200+ employees in NYC, SF, and Manila',
          'Built and managed an Icinga server to monitor servers',
          'Wrote custom Nagios plugins to support Mac-based service checks',
          'Built and managed a Munki/MunkiWebAdmin server to ease package management',
          'Built and managed a Puppet server for desktop configuration management',
          'Built and managed a multi-master BIND environment for local DNS',
          'Built and managed a DeployStudio server with custom scripts in Python and Bash for workstation bootstrapping',
          'Built and managed a Git server for IT code base',
          'Built and managed a local Vagrant repository',
          'Built and managed multi-boot QA testing servers',
          'Resolved issues silently over SSH',
          'Hacked together custom solutions for unique problems',
        ],
        to: new Date(2013, 11),
      },
    ],
  },
  {
    company: 'AllMac LLC',
    positions: [
      {
        from: new Date(2011, 8),
        location: 'New York City',
        name: 'IT Support',
        responsibilities: [
          'Providing supervised technological support for the New York Times, Pentagram, AIGA, Alloy, and Night Agency',
          'Independently resolving issues concerning Mac OS X, Mac Server',
        ],
        to: new Date(2012, 10),
      },
    ],
  },
];

const styles = (theme: Theme) => createStyles({
  paper: {
    color: theme.palette.text.secondary,
    elevation: 3,
    marginBottom: '0em',
    marginLeft: '1.75em',
    marginRight: '40%',
    marginTop: '1.75em',
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    zIndex: 1,
  },
  root: {
    flexGrow: 1,
  },
});

export interface IRExperienceProps extends WithStyles<typeof styles> {}

const experienceItem = (key: number, item: IRExperienceItem, props: IRExperienceProps): JSX.Element => {
  return (
    <Grid key={key} className={props.classes.paper} item xs={8}>
      <RExperienceItem company={item.company} positions={item.positions} />
    </Grid>
  );
};

const RExperience: React.SFC<IRExperienceProps> = (props: IRExperienceProps): JSX.Element => {
  const experienceComponents: JSX.Element[] = experience.map((item: IRExperienceItem, i: number) => {
    return experienceItem(i, item, props);
  });
  return (
    <div className={props.classes.root}>
      <RBackground />
      <Grid container spacing={24}>
        {experienceComponents}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(RExperience);

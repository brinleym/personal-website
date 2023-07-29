import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Custom Components
import Overview from './Overview';
import WorksGrid from './WorksGrid';
import MyTimeline from './MyTimeline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  sectionTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center'
  }
}));

export default function Skeleton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography 
            variant="h4" 
            className={classes.sectionTitle}
          >
            Overview
          </Typography>
          <Overview></Overview>
        </Grid>
        <Grid item xs={12}>
          <Typography 
            variant="h4" 
            className={classes.sectionTitle}
          >
            Projects
          </Typography>
          <WorksGrid></WorksGrid>
        </Grid>
        <Grid item xs={12}>
          <Typography 
            variant="h4" 
            className={classes.sectionTitle}
          >
            Timeline
          </Typography>
          <MyTimeline></MyTimeline>
        </Grid>
      </Grid>
    </div>
  );
}
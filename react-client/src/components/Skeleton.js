import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
  paper: {
    padding: theme.spacing(2),
  },
  sectionTitle: {
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
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.sectionTitle}>Overview</Typography>
            <Overview></Overview>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
            <Typography variant="h4" className={classes.sectionTitle}>Work</Typography>
            <WorksGrid></WorksGrid>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
            <Typography variant="h4" className={classes.sectionTitle}>Timeline</Typography>
            <MyTimeline></MyTimeline>
          {/* </Paper> */}
        </Grid>
{/*         <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
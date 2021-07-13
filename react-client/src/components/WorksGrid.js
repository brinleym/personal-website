import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WorkCard from './WorkCard';

import serverless_img from '../static/images/ServerlessComputing.jpg';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#123456'
  }
}));

// Work Card props
// Type (string)
// Title (string)
// Date (string)
// Image path (string)
// Description (string)
// Details (string)
// Link (string)

const WorksGrid = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <WorkCard
              type="written"
              title="Serverless Computing Research"
              date="Month Day, Year"
              image={serverless_img}
              image_title="Data Center"
              description=""
              details=""
              link=""
            >
            </WorkCard>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=12, md=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=12, md=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=12, md=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=12, md=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=12, md=6</Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default WorksGrid;
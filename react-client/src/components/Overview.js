import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Custom Components
import BioCard from './BioCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#123456'
  }
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12, sm=6</Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Overview;
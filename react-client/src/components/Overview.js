import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Custom Components
import BioCard from './BioCard';

/* const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
})); */

const Overview = () => {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8}>
          {/* <Paper className={classes.paper}> */}
            <BioCard></BioCard>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Overview;
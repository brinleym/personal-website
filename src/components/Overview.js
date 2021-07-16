import React from 'react';
import Grid from '@material-ui/core/Grid';

// Custom Components
import BioCard from './BioCard';

const Overview = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <BioCard></BioCard>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Overview;
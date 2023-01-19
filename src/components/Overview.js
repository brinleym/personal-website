import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import logo from '../static/images/logo.png';

// Custom Components
import BioCard from './BioCard';

const Overview = () => {
  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item sx={12}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              maxHeight: 100,
              maxWidth: 100
            }}
            component="img"
            src={logo}
          >
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <BioCard></BioCard>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Overview;
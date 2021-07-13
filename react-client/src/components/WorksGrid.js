import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WorkCard from './WorkCard';

import serverless_img from '../static/images/DataCenter.jpg';
import printer_img from '../static/images/3DPrinter.jpg';
import cellular_img from '../static/images/CellTower.jpg';
import stethoscope_img from '../static/images/Healthcare.jpg';
import pi_img from '../static/images/RaspberryPi.jpg';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.dark
  }
}));

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
              date="May, 2020"
              image={serverless_img}
              image_title="Data Center"
              description=""
              details=""
              link="https://drive.google.com/file/d/1xOQoX3BNBfta2BllbE0wNTZdOScboOxu/view?usp=sharing"
            >
            </WorkCard>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <WorkCard
              type="podcast"
              title="Mechanical Metamaterials Podcast"
              date="TBD"
              image={printer_img}
              image_title="3D printer"
              description=""
              details=""
              link="https://drive.google.com/file/d/1n7MitolN3WmklgiO1y5l8ZurzzURxTVj/view?usp=sharing"
              >
              </WorkCard>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <WorkCard
              type="podcast"
              title="6G and Artificial Intelligence Podcast"
              date="TBD"
              image={cellular_img}
              image_title="Cell Tower"
              description=""
              details=""
              link="https://drive.google.com/file/d/1HxZPtMnYUs5o6fBDs-uvUXCsNKbC_9uj/view?usp=sharing"
              >
            </WorkCard>           
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <WorkCard
                type="code"
                title="Medical Cutsheets (aka Medsheet)"
                date="TBD"
                image={stethoscope_img}
                image_title="Stethoscope"
                description=""
                details=""
                link="https://medsheet.gitlab.io/landing/"
                >
              </WorkCard>  
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <WorkCard
              type="code"
              title="Coming soon: Object-detecting Raspberry Pi"
              date="TBD"
              image={pi_img}
              image_title="Mini computers"
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
      </Grid>
    </React.Fragment>
  )
}

export default WorksGrid;
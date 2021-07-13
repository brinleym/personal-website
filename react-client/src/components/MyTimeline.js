import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChildCareIcon from '@material-ui/icons/ChildCare';

// Props for Timeline Card
//
// Date range (string)
// Title (string)
// Place (string)
// Details (string)
// Type (string / work, school, project)

// Custom Components
import CustomTimelineItem from './CustomTimelineItem';

const useStyles = makeStyles((theme) => ({
  tempPaper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#123456'
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <CustomTimelineItem 
        date="April 2021 - present" 
        title="Senior Cyber Software Engineer" 
        place="MITRE"
        type="work"
      >
      </CustomTimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <ChildCareIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Pre-professional life
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default function MyTimeline() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Paper className={classes.tempPaper}>
            <Typography>Present</Typography>
            <CustomizedTimeline></CustomizedTimeline>
            <Typography>Past</Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
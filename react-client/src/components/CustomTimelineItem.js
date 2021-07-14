import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

// Custom Components
import TimelineItemContentCard from './TimelineItemContentCard';

const useStyles = makeStyles((theme) => ({
  timelineDotBlue: {
    backgroundColor: blue[200]
  }
}));

function CustomTimelineDot(props) {
  const classes = useStyles();
  const eventType = props.type;

  if (eventType === "work") {
    return (
      <TimelineDot>
        <WorkIcon />
      </TimelineDot>
    );
  }
  else if (eventType === "school") {
    return (
      <TimelineDot className={classes.timelineDotBlue}>
        <SchoolIcon />
      </TimelineDot>
    )
  }
  return (
    <TimelineDot></TimelineDot>
  )
}

const CustomTimelineItem = (props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {props.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <CustomTimelineDot type={props.type}></CustomTimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineItemContentCard
          title={props.title}
          place={props.place}
        ></TimelineItemContentCard>
      </TimelineContent>
    </TimelineItem>
  )
}

export default CustomTimelineItem;
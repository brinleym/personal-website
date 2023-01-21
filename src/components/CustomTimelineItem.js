import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';

// Custom Components
import TimelineItemContentCard from './TimelineItemContentCard';

function CustomTimelineDot(props) {
  const eventType = props.type;

  if (eventType === "work") {
    return (
      <TimelineDot color="secondary">
        <WorkIcon />
      </TimelineDot>
    );
  }
  else if (eventType === "school") {
    return (
      <TimelineDot color="secondary">
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
          type={props.type}
        ></TimelineItemContentCard>
      </TimelineContent>
    </TimelineItem>
  )
}

export default CustomTimelineItem;
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function TimelineItemContentCard(props) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="body1" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary">
          {props.place}
        </Typography>
      </CardContent>
    </Card>
  );
}
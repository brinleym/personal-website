import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  secondaryTextColor: {
    opacity: 0.7
  },
  title: {
    fontSize: 14,
  }
}));

export default function TimelineItemContentCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="body1" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.secondaryTextColor}>
          {props.place}
        </Typography>
      </CardContent>
    </Card>
  );
}
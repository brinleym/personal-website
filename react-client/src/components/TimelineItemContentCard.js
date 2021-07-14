import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    backgroundColor: theme.palette.type === "dark" ? theme.palette.background.paper : theme.palette.primary.main,
    color: theme.palette.type === "dark" ? theme.palette.text.primary : theme.palette.primary.contrastText
  },
  secondaryTextColor: {
    color: theme.palette.type === "dark" ? theme.palette.text.secondary : theme.palette.primary.contrastText,
    opacity: theme.palette.type === "dark" ? 1 : 0.7
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
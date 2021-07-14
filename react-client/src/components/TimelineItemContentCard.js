import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    // backgroundColor: theme.palette.grey[700]
  },
  title: {
    fontSize: 14,
  },
  pos: {
    // marginBottom: 12,
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
        <Typography className={classes.pos} color="textSecondary">
          {props.place}
        </Typography>
        {/* <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
        </Typography> */}
      </CardContent>
    </Card>
  );
}
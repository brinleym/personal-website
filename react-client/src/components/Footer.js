import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    bottom: 0,
    position: 'relative', // consider changing to absolute
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.type === "dark" ? theme.palette.grey[900] : theme.palette.primary.main,
    color: '#ffffff',
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2} square>
        <Typography variant="body1">This is the app's footer</Typography>
      </Paper>
    </div>
  )
}

export default Footer;
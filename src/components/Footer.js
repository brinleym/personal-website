import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    bottom: 0,
    position: 'relative',
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2} square>
        <Typography variant="caption" component="p">Contact: brinley.macnamara@gmail.com</Typography>
        <Typography variant="caption">Copyright &copy; 2023 Brinley Macnamara. All Rights Reserved.</Typography>
      </Paper>
    </div>
  )
}

export default Footer;
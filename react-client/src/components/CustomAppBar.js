import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  darkModeButton: {
    marginLeft: theme.spacing(2)
  },
  appBar: {
    backgroundColor: theme.palette.type === "dark" ? theme.palette.grey[900] : theme.palette.primary.main,
    color: theme.palette.type === "dark" ? theme.palette.text.primary : theme.palette.primary.contrastText
  }
}));

export default function CustomAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Brinley Macnamara
          </Typography>
          <Button color="inherit" disabled>Blog</Button>
          <Button 
            color="inherit" 
            href="https://drive.google.com/file/d/1lydIVQw7hMTmeaTssO3KAzt2QNJE6Qn1/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
          <IconButton 
            color="inherit" 
            aria-label="dark-mode-toggle" 
            className={classes.darkModeButton}
            onClick={() => props.toggleDarkMode(!props.darkIsEnabled)}
          >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
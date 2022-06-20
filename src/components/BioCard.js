import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === "dark" ? theme.palette.background.paper : theme.palette.primary.main,
    color: theme.palette.type === "dark" ? theme.palette.text.primary : theme.palette.primary.contrastText
  },
  textPaddingLeft: {
    paddingLeft: theme.spacing(1)
  },
  textPaddingBottom: {
    paddingBottom: theme.spacing(2)
  }
}));

export default function BioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <div className={classes.textPaddingBottom}>
            <Typography variant="h5" component="span" className={classes.textPaddingRight}>hello there!</Typography>
            <Typography variant="h5" component="span" className={classes.textPaddingLeft}>my name is brinley macnamara.</Typography>
          </div>
          <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
            Thank you for visiting my website! I’m a versatile software engineer 
            who loves writing, designing websites, and creating better customer 
            experiences. I'm currently employed as a Software Engineer (based in 
            Boston) and do freelance software engineering on the side.
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Hit me up at <b>brinley.macnamara@gmail.com</b>
          </Typography>
        </CardContent>
      <CardActions>
        <Button 
          size="small"
          href="https://brinley.substack.com/archive"
          target="_blank"
        >
          Blog
        </Button>
        <Button 
          size="small"
          href="https://drive.google.com/file/d/1aUAlcdgJxW09JIOYgnPgW-Tmi09-aSZo/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Button>
      </CardActions>
    </Card>
  );
}
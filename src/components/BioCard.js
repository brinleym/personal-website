import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
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
    <Card>
        <CardContent>
          <div className={classes.textPaddingBottom}>
            <Typography 
              variant="h5" 
              component="span" 
              className={classes.textPaddingRight}>
               hey!
            </Typography>
            <Typography 
              variant="h5" 
              component="span" 
              className={classes.textPaddingLeft}>
                I'm Brinley!
            </Typography>
          </div>
          <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
            Thank you for visiting my website! I’m a versatile software engineer 
            who loves frontend engineering, ui design, and creating amazing
            customer experiences. In my spare time, I enjoy yoga as well as 
            listening to (and occasionally creating) podcasts.
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Hit me up at <b>brinley.macnamara@gmail.com</b>
          </Typography>
        </CardContent>
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
            customer experiences. I'm currently based in Boston.
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Hit me up at <b>brinley.macnamara@gmail.com</b>
          </Typography>
        </CardContent>
      <CardActions>
        <Button 
          size="small"
          href="https://drive.google.com/file/d/1RI743KZAoSTPt5y2b1OoOPUswc-6D8q4/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Button>
      </CardActions>
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const CustomButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained">Click Me</Button>
    </div>
  )
}

export default CustomButton;
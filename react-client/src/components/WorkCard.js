import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LaunchIcon from '@material-ui/icons/Launch';
import NotesIcon from '@material-ui/icons/Notes';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: '#000000' // icons should have "on primary" color (which is black for the Dark theme)
  },
}));

function WorkTypeIcon(props) {
  const workType = props.type;
  if (workType === "code") {
    // Code icon
    <SvgIcon>
      <path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />;
    </SvgIcon>
  }
  else if (workType === "podcast") {
    return (
      // Podcast icon
      <SvgIcon>
        <path fill="currentColor" d="M17,18.25V21.5H7V18.25C7,16.87 9.24,15.75 12,15.75C14.76,15.75 17,16.87 17,18.25M12,5.5A6.5,6.5 0 0,1 18.5,12C18.5,13.25 18.15,14.42 17.54,15.41L16,14.04C16.32,13.43 16.5,12.73 16.5,12C16.5,9.5 14.5,7.5 12,7.5C9.5,7.5 7.5,9.5 7.5,12C7.5,12.73 7.68,13.43 8,14.04L6.46,15.41C5.85,14.42 5.5,13.25 5.5,12A6.5,6.5 0 0,1 12,5.5M12,1.5A10.5,10.5 0 0,1 22.5,12C22.5,14.28 21.77,16.39 20.54,18.11L19.04,16.76C19.96,15.4 20.5,13.76 20.5,12A8.5,8.5 0 0,0 12,3.5A8.5,8.5 0 0,0 3.5,12C3.5,13.76 4.04,15.4 4.96,16.76L3.46,18.11C2.23,16.39 1.5,14.28 1.5,12A10.5,10.5 0 0,1 12,1.5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5Z" />
      </SvgIcon>
    )
  }
  return (
    // Icon denoting deliverable is a piece of writing
    <NotesIcon />
  )
}

export default function WorkCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="work_type" className={classes.avatar}>
            <WorkTypeIcon type={props.type}></WorkTypeIcon>
          </Avatar>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.image_title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Open">
          <IconButton 
            aria-label="open in new tab"
            href={props.link}
            target="_blank"
          >
            <LaunchIcon />
          </IconButton>          
        </Tooltip>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Details</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
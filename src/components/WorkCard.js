import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import NotesIcon from '@material-ui/icons/Notes';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import CodeIcon from '@mui/icons-material/Code';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.type === 'light' ? '#fff' : '#000'
  }
}));

function WorkTypeIcon(props) {
  const workType = props.type;
  if (workType === "code") {
    return (
      // Code icon
      <CodeIcon></CodeIcon>
    )
  }
  else if (workType === "podcast") {
    return (
      // Podcast icon
      <PodcastsIcon></PodcastsIcon>
    )
  }
  else if (workType === "youtube") {
    return (
      // Video icon
      <YouTubeIcon></YouTubeIcon>
    )
  }
  return (
    // Default icon; denotes work type is a piece of writing
    <NotesIcon />
  )
}

export default function WorkCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="work_type" className={classes.avatar}>
            <WorkTypeIcon type={props.type}></WorkTypeIcon>
          </Avatar>
        }
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant="outlined" 
          color="secondary" 
          disableElevation
          href={props.link}
          target="_blank"
          >
            View
        </Button>
      </CardActions>
    </Card>
  );
}
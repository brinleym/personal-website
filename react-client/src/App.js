import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

// Custom Components
import Skeleton from './components/Skeleton';
import CustomAppBar from './components/CustomAppBar';
import Footer from './components/Footer';
import Overview from './components/Overview';
import WorksGrid from './components/WorksGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    position: 'relative'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CustomAppBar></CustomAppBar>
      <Container>
        <Skeleton></Skeleton>       
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Custom Components
import Skeleton from './components/Skeleton';
import CustomAppBar from './components/CustomAppBar';
import Footer from './components/Footer';

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

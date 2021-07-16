import { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Theme setting dependencies
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import cyan from '@material-ui/core/colors/cyan';
import amber from '@material-ui/core/colors/amber';


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

  const [dark, setDark] = useState(true);

  let theme = createTheme({
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: cyan[600],
      },
      secondary: {
        main: amber[400]
      }
    }
  });
  
  theme = responsiveFontSizes(theme);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <CustomAppBar toggleDarkMode={setDark} darkIsEnabled={dark}></CustomAppBar>
        <Container>
          <Skeleton></Skeleton>       
        </Container>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

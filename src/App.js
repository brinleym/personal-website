import { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Theme setting dependencies
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { teal } from '@material-ui/core/colors';


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

  const [mode, setDark] = useState('dark');

  let theme = createTheme({
    palette: {
      type: mode,
      contrastThreshold: 4.5,
      /*
      primary: {
        main: teal[600]
      },
      background: {
        paper: `rgba(0, 137, 123, 0.05)`
      }
      */
      ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: teal[600],
          },
          secondary: {
            main: '#4a635e', // muted forest green (dark)
          },
          background: {
            paper:  `rgba(0, 137, 123, 0.05)`,
          }
        }
      : {
          // palette values for dark mode
          primary: {
            main: teal[200]
          },
          secondary: {
            main: '#b1ccc6', // muted forest green (light)
          },
          background: {
            paper: `rgba(0, 137, 123, 0.05)`,
          },
        }),
    }
  });
  
  theme = responsiveFontSizes(theme);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <CustomAppBar toggleDarkMode={setDark} darkIsEnabled={mode === 'dark' ? true : false}></CustomAppBar>
        <Container>
          <Skeleton></Skeleton>       
        </Container>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#d08ded'
          },
          secondary: {
            main: '#fff'
          },
          background: {
            default: '#282828'
          }
        }
      })}
    >
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

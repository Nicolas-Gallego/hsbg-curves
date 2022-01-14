import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: { main: '##3d002d    ', light: '#6a2d56', dark: '#1f0003' },
    secondary: { main: '#ffa400', light: '#ffd549', dark: '#c67500' },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

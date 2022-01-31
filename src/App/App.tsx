import logo from '../logo.png';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import AppBar from '../AppBar';
import Person from '../Person';

function App() {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5rem'
        }}
      >
        <Box component='main'>
          <img src={logo} className='App-logo' alt='logo' />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/person' element={<Person />} />
            </Routes>
          </Router>
        </Box>
      </Box>
    </>
  );
}

export default App;

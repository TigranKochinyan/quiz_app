// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import {} from '@mui/material';
import './App.css';

const Paths = {
  Home: '/',
  Game: '/game',
  Results: '/results',
};

function App() {
  return (
    <Routes>
      <Route path={Paths.Home} element={<Home />} />
      {/* <Route path={Paths.Game} element={<GamePage />} />
      <Route path={Paths.Results} element={<ResultsPage />} /> */}
    </Routes>
  );
}

export default App;

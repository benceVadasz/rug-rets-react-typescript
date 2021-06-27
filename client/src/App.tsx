import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Login/>
    </Router>
  );
}

export default App;

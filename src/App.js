import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Facts from './pages/MathFacts';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes className="appContainer">
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
    </Router>
  );
}

export default App;

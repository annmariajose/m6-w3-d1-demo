import React, { Component } from 'react';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarChartDemo from './BarChartDemo';
import SphereDemo from './SphereDemo';
import TreeDemo from './TreeDemo';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/bar' exact element={<BarChartDemo/>} />
          <Route path='/sphere' element={<SphereDemo/>} />
          <Route path='/tree' element={<TreeDemo/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;

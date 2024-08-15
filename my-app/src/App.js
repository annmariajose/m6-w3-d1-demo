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
          <Route path='/bardemo' exact element={<BarChartDemo/>} />
          <Route path='/spheredemo' element={<SphereDemo/>} />
          <Route path='/treedemo' element={<TreeDemo/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;

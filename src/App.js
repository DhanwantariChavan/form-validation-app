import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/display" element={<DisplayComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
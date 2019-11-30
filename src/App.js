import React from 'react';
import logo from './logo.svg';
import Directory from './Directory'
import './App.css';

function App() {
  const campsites = [ 'Asategue', 'Yosemite', 'Glacier National Park']
  return (
    <div className="App">
      <Directory test='test' campsites={campsites} />
    </div>
  );
}

export default App;

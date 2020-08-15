import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({})
  const body = {
    downloadId: 'z4tQHKIL',
    key: '70zjLm3RmgMAlghJ2IkClA'
  }

  useEffect(() => {
    
    axios.post(`/api/folder/`, body)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [body])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

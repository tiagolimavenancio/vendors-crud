import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from './helpers/history';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;

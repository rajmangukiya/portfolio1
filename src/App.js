import './css/main.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Router';

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={false}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
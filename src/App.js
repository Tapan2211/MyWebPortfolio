import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Home from './components/Home/Home';

const Home = React.lazy(() => import('./components/Home/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

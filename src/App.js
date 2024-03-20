import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import  Home  from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>

            <Route exact path='/' element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

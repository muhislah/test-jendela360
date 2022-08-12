import './App.css';
import Dashboard from './pages/dashboard';
import Input from './pages/input';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

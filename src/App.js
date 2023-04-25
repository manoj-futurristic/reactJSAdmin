import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';
import NotFound from './components/page-not-found';
import Login from './views/auth/login';
import Dashboard from './views/dashboard/dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App
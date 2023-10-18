import { useContext } from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,   // Use Routes instead of Switch
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
function App() {

  const {user}=useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" />  : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

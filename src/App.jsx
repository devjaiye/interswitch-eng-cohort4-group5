import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/Users.jsx'
import UserProfile from './pages/UserProfile.jsx';
import Login from "./components/Login.jsx";

function App() {
  return (
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/app/dashboard" element={<Users />} />
            <Route path="/app/profile" element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;




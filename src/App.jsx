import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/Users.jsx'
import UserProfile from './pages/UserProfile.jsx';
import Login from "./components/Login.jsx";
import CreatePassword from "./components/CreatePassword.jsx";

function App() {
  return (
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/change-password/:id" element={<CreatePassword />} errorElement={<Login/>}/>
            <Route path="/app/dashboard" element={<Users />} errorElement={<Login/>}/>
            <Route path="/app/profile" element={<UserProfile />} errorElement={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;




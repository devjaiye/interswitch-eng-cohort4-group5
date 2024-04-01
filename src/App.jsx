import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SidebarContent from './components/Sidebar/SidebarContent';
import Users from './pages/Users.jsx'
import UserProfile from './pages/UserProfile.jsx';

function App() {
  return (
<BrowserRouter>
      <SidebarContent/>
        <Routes>
         <Route path="/app/dashboard" element={<Users />} />
          <Route path="/app/profile" element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;




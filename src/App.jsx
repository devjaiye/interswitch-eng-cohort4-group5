import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="text-red-700">
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

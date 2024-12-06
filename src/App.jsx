import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard"
// import Dashboard1 from "./Components/Dashboard";
import Sales from "./Components/Sales";
import Crm from "./Components/Crm";
import Settings from "./Components/Settings";
import Test from "./Components/Test";
// import Test1 from "./Components/Test1";
import TestDashboard from './Components/TestDashboard';

function App() {

  return (
    <div className="font-sans">
      {/* <LoginForm /> */}
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />}/>
        <Route path="/crm" element={<Crm />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/test1" element={<TestDashboard />}/>
      </Routes>
    </div>
  )
}

export default App

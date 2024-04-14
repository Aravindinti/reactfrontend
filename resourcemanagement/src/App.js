import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import LogOut from './Components/LogOut';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App" >
    
<BrowserRouter>
<Routes>
<Route path='/login' element={<Login></Login>}></Route>


<Route path='/DashBoard' className="Dash" element={

<ProtectedRoute>
<Dashboard></Dashboard>
</ProtectedRoute>
  

}>


</Route>
<Route path='/logout' element={<LogOut></LogOut>}></Route>

</Routes>

</BrowserRouter>

 
    </div>
  );
}

export default App;

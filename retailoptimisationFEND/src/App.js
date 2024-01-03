
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import OverViewPage from './Components/Pages/OverViewPage';
import Login from './Components/Pages/Login';
import Home from './Components/Home';
import HomePage from './Components/Pages/HomePage';
import SalesComparisonDBC from './Components/charts/SalesComparisonDBC';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}>
    <Route index element={<Login/>}/>
    <Route path='/overviewpage' element={<OverViewPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      </Route>
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;

import React from 'react'; 
import './index.css'; 
import { BrowserRouter, reactDom, Route, Routes, Routers } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'; 
import Create from './pages/create';
import Home from './pages/home';
import Notfound from './pages/404'; 
import ReactDOM from 'react-dom/client'
import { render } from '@testing-library/react'; 
import Login from './pages/login'
export default function Apper(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/create' element={<Create/>}> </Route>  
      <Route path='/login' element={<Login/>}> </Route>  
      <Route path='*' element={<Notfound/>}> </Route>  
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apper/>);
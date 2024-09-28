import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import{Login} from './components/Login.jsx'
import {Register} from './components/Register.jsx'
import {Home} from './components/Home.jsx'
import {RootPage} from './components/RootPage.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<RootPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register'element={<Register/>}></Route>
      <Route path='/login/home'element={<Home/>}></Route>
      <Route path='/register/home'element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
)

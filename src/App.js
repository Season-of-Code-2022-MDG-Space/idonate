import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Ehelp from './pages/Ehelp';
import Alert from './pages/Alert';
import Basket from './pages/Basket';
import Blog from './pages/Blog';
import Signup from './pages/Signup';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/ehelp' element={<Ehelp />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

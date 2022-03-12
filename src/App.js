import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Ehelp from './pages/Ehelp';
import Alert from './pages/Alert';
import Basket from './pages/Basket';
import Blog from './pages/Blog';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/ehelp' element={<Ehelp />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </>
  );
}

export default App;

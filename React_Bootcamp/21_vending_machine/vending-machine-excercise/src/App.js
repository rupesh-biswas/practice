import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainHeader from './MainHeader'
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import VendingMachine from './VendingMachine';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<MainHeader />} >
          <Route index element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/sardines' element={<Sardines />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

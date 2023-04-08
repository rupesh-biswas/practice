
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import { Fragment } from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<FoodSearch />} />
        <Route path='/food/:foodName' element={<Food />} />
        <Route path='/food/:foodName/drink/:drinkName' element={<Meal />} />
        <Route path='*' element={<div>Error 404 - Page Not Found</div>} />
      </Routes>
    </Fragment>
  );
}

export default App;

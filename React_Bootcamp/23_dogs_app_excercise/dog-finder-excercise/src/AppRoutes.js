import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Mainheader from './Mainheader';
import DogList from './DogList';
import DogDetails from './DogDetails';

function AppRoutes(props) {
    return (
        <Routes>
            <Route path='/dogs' element={<Mainheader dogs={props.dogs} />}>
                <Route index element={<DogList dogs={props.dogs} />} />
                <Route path='/dogs/:name' element={<DogDetails dogs={props.dogs} />} />
            </Route>
            <Route path='*' element={<Navigate replace to='/dogs' />} />
        </Routes>
    )
}

export default AppRoutes
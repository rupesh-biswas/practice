import React, { Fragment } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function MainHeader() {

    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
}

export default MainHeader
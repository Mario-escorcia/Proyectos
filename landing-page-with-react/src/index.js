import React from 'react';
import ReactDom from 'react-dom/client'
import Nav from './components/Navbar'
import Info from './components/InfoPrincipal'
import './index.css'

const root = ReactDom.createRoot(document.getElementById("root"));


root.render(
    <>
    <div className='background'>
        <Nav/>
        <Info/>
    </div>
    </>
)

// 17/12/2022
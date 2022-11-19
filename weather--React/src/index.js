import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './components/App'
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    // ejecuto el componente app.jsxx que contiene los otros 2 y renderizo la aplicación
    <>
    <App></App>
    </>
)

// 18/11/2022
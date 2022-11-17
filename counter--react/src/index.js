import React from 'react'
import ReactDom from 'react-dom/client'
import {Titulo} from './Titulo'
import {CountComponent} from './Counter'

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <>
        <Titulo/>
        <CountComponent/>
    </>
)

// este proyecto es simplemente un contador que aumenta o disminuye , es allgo sencillo pero es solo un primer paso en react.js , espero pronto hacer cosas mucho mas profesionales.


// 08/11/2022

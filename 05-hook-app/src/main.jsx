
import React from "react";

import ReactDOM from 'react-dom/client';
import { HooksApp } from "./HooksApp";

import './index.css';
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/simpleForm";
import {  FormWithCustomHook } from "./02-useEffect/formWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre.jsx";

import './08-useReducer/intro-reducer.js'
import { TodoApp } from "./08-useReducer/TodoApp.jsx";
import { MainApp } from "./09-useContext/MainApp.jsx";


import { BrowserRouter } from "react-router-dom";
import { MainAppNail } from "./appNail/MainAppNail.jsx";



ReactDOM.createRoot( document.querySelector('#root') ).render(

    <BrowserRouter>
    
        <React.StrictMode>
            < MainAppNail />
        </React.StrictMode>

    </BrowserRouter>
    

)
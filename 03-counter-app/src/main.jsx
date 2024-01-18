import React from 'react';
import ReactDOM from 'react-dom/client'; //Estos dos elementos son los que necesito para renderizar mi aplicacion
import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './style.css'; //importando el stylo y se aplica automaticamente al html
import { CounterApp } from './CounterApp';
import { ShowMessageApp } from './ShowMessageApp';

/*
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
        <App />
    </React.StrictMode>
);*/




ReactDOM.createRoot( document.getElementById('root')).render(

    <React.StrictMode>
        {/*<CounterApp value={54} />*/}
        <ShowMessageApp cliente='Agustin'/>
    </React.StrictMode>
)





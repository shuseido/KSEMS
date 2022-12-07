import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './actions/demo';
import DuckItem from './components/demo/DuckItem';
import { fetchData } from './utils/ems-core';

function App() {
    // usr axios to fetch data from api server
    // setLogs is a function to set logs with response data from api
    // to prevent endless loop (cause we define logs and setLogs in component) we just need to add a parameter as empty array in useEffect)
    const logs = fetchData('log');

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                {ducks.map((duck) => (
                    <DuckItem key={duck.name} duck={duck} />
                ))}
                <ul>
                    {logs.map((log: any) => (
                        <li key={log.id}>{log.actionName}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;

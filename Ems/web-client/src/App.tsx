import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './actions/demo';
import DuckItem from './components/demo/DuckItem';
import axios from 'axios';

function App() {
    // usr axios to fetch data from api server
    // setActivities is a callback when get response from promise api
    // to prevent endless loop (cause we define activities and setActivities in component, we just need to add a parameter as empty array in useEffect)
    const [activities, setActitities] = useState([]);
    const apiHost = 'http://localhost:5000/weatherforecast';
    useEffect(() => {
        axios.get(apiHost).then((response) => {
            console.log(response);
            setActitities(response.data);
        });
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                {ducks.map((duck) => (
                    <DuckItem key={duck.name} duck={duck} />
                ))}
                <ul>
                    {activities.map((activity: any) => (
                        <li key={activity.date}>{activity.date}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;

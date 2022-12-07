import React from 'react';
import './App.css';
import { FetchData } from './utils/ems-core';
import Title from 'antd/es/typography/Title';
import { List } from 'antd';

function App() {
    // usr axios to fetch data from api server
    // setLogs is a function to set logs with response data from api
    // to prevent endless loop (cause we define logs and setLogs in component) we just need to add a parameter as empty array in useEffect)
    const logs = FetchData('log');

    return (
        <div className='App'>
            <Title level={2}> Hello React! </Title>
            <List
                itemLayout='horizontal'
                dataSource={logs}
                renderItem={(log: any) => (
                    <List.Item>
                        <List.Item.Meta key={log.id} title={log.actionName} description={log.category} />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default App;

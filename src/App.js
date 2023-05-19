import React from 'react';
import Tables from './components/TablesFunc';
import './css/index.css'

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default function App() {
    return (
        <div className='main-content'>
            <Tables />
        </div>
    );

}
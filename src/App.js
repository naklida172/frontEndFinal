import React from 'react';
import './styles/App.css';
import Timer from './components/timer.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Timer</h1>
                <Timer />
            </header>
        </div>
    );
}

export default App;

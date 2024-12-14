import React from 'react';
import './styles/App.css';
import './styles/Timer.css';
import './styles/Sections.css';
import './styles/Intervals.css'
import Sections from './components/sections.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Pomodoro Timer</h1>
                <Sections/>
            </header>
        </div>
    );
}

export default App;

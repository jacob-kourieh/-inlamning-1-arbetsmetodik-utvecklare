import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoadingPage from './Pages/LoadingPage';
import SetTimerPage from './Pages/SetTimerPage';
import AnlogPage from './Pages/AnlogPage';
import DigitalPage from './Pages/DigitalPage';
import VisualPage from './Pages/VisualPage';
import PausePage from './Pages/PausePage';

function App() {
    return (
        <div className="App">
            <Router>
                <main>
                    <Link to="/"></Link>
                    <Routes>
                        <Route path="/" element={< LoadingPage />} />
                        <Route path="/SetTimer" element={<SetTimerPage />} />
                        <Route path="/Anlog" element={<AnlogPage />} />
                        <Route path="/Digital" element={<DigitalPage />} />
                        <Route path="/Visual" element={<VisualPage />} />
                        <Route path="/Pause" element={<PausePage />} />


                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <main>
                    <Link to="/"></Link>
                    <Routes>
                        {/* <Route path="/" element={< />} /> */}


                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
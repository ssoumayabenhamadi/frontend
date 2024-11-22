import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import FindParty from './pages/FindParty';
import Login from './pages/login';
import Signup from "./pages/signup";
import CreatePartyPage from "./pages/createParty";
function App() {
    return (
        <div className="App">
            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<FindParty />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/createParty" element={<CreatePartyPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

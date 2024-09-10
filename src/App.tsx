import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import Header from './components/Header';
import PetList from './components/PetList';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes> {/* Changed from <Switch> to <Routes> */}
                <Route path="/" element={<PetList />} /> {/* Updated component prop to element */}
            </Routes>
        </Router>
    );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Add from './Add';
import Edit from './Edit';

function CrudRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/create" element={<Add />} />
                <Route path="/update/:id" element={<Edit />} />

            </Routes>
        </BrowserRouter>
    );
}

export default CrudRouter;

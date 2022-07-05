import './App.css';
//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features';
import { Landing, Error, View, Delete } from './pages';
import { Form } from './components/Form';


const App = () => {

    return (
        <BrowserRouter>
            <AppNav />
            <Routes>
                {/* When the URL in the browser becomes /, toggle on the Landing page */}
                <Route path="/" element={<Landing />} />
                <Route path="/addflight" element={<Form />} />
                <Route path="/viewflights" element={<View />} /> 
                <Route path="/removeflights" element={<Delete />} />  
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );   
}


export default App; 
//import { useState } from "react";
//import { useSelector } from "react-redux";
import { Center } from "../components/StyledComponents/StyledComponents";
//import { Form } from "../components/Form";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { CSSComponent } from "../components/StyledComponents";
import airplane  from "../airplane-sunset.jpg";



export const Landing = () => {
    
    return (
        
        <Center>
            <div>
                <h2>Welcome to Mango Airlines! Please use the Nav Bar to navigate. </h2>
                <image src={airplane} alt="Airplane" height={800}/>
            </div>

        </Center>
    );
}
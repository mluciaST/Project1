import { useEffect, useState } from 'react';
import axios from 'axios';
import { Center } from '../components/StyledComponents/StyledComponents';
import './style.css';
import { FlightRow } from './FlightRow';


export const View = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, fetch all flights
    useEffect(() => {
        axios.get('http://localhost:8042/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (

        
        <div>
            <Center><div><h3>Flight List: </h3></div></Center>
            {/* Transform the flight array into an array of JSX elements */}
            <Center> 

            <table>
                <tr>
                    <th><Center>Flight Number</Center></th>
                    <th><Center>Departure Date</Center></th>
                    <th><Center>Departure Time</Center></th>
                    <th><Center>Departure Airport</Center></th>
                    <th><Center>Arrival Date</Center></th>
                    <th><Center>Arrival Time</Center></th>
                    <th><Center>Arrival Airport</Center></th>
                    <th><Center>Passenger Number</Center></th>
                    <th><Center>Passenger Limit</Center></th>
                    <th></th>
                    <th></th>
                </tr>

                {flights?.map((flight) => {
                    return (
                        <FlightRow key={flight._id} flight={flight} flights={flights} setFlights={setFlights} /> 
                    );
                })}
                
            </table>
               
            </Center>
        </div>
    );
}
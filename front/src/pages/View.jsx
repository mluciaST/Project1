import { useEffect, useState } from 'react';
import axios from 'axios';
import { Center } from '../components/StyledComponents/StyledComponents';

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
                {flights.map((flight) => {
                    return (
                        <div key={flight._id}>
                            <div><strong>{flight.flightNumber}</strong></div>
                            <div><strong>{flight.departureDate}</strong></div>
                            <div><strong>{flight.arrivalDate}</strong></div>
                            <div><strong>{flight.departureTime}</strong></div>
                            <div><strong>{flight.arrivalTime}</strong></div>
                            <div><strong>{flight.departureAirport}</strong></div>
                            <div><strong>{flight.arrivalAirport}</strong></div>
                            <div><strong>{flight.passengerNumber}</strong></div>
                            <div><strong>{flight.passengerLimit}</strong></div> 
                        </div>
                    );
                })}
            </Center>
        </div>
    );
}
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Center } from '../components/StyledComponents/StyledComponents';

export const Delete = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, fetch all flights
    useEffect(() => {
        axios.delete('http://localhost:8042/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <div>
            <div>
                <Center><h3>Enter the Flight ID to remove: </h3></Center>
                <br />
                <div>
                    <Center><input id="Flight ID" type="text" placeholder="Flight ID"/></Center>
                </div>
                <Center>
                <div>
                    <input type="submit" value="Add Flight" />
                </div>
            </Center>
            </div>
            {/* Transform the flight array into an array of JSX elements */}
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
        </div>
    );
}
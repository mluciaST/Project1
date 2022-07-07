import { Center } from "../StyledComponents/StyledComponents";
import {  useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Form = () => {

    const flightNumberRef = useRef();
    const departureDateRef = useRef()
    const departureTimeRef = useRef()
    const departureAirportRef = useRef()
    const arrivalDateRef = useRef()
    const arrivalTimeRef = useRef()
    const arrivalAirportRef = useRef()
    const passengerNumberRef = useRef()
    const passengerLimitRef = useRef()

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let currentPassengerLimit = passengerLimitRef.current.value;
        let currentPassengerNumber = passengerNumberRef.current.value;
        const exceedPassengerLimit = currentPassengerNumber - currentPassengerLimit;

        if (exceedPassengerLimit > 0) {
            alert("Number of passengers cannot be greater than Passenger Limit");
        } 
        else {
            try {
                await axios.post('http://localhost:8042/flights', 
                {
    
                        flightNumber: flightNumberRef.current.value,
                        departureDate: departureDateRef.current.value,
                        departureTime: departureTimeRef.current.value,
                        departureAirport: departureAirportRef.current.value,
                        arrivalDate: arrivalDateRef.current.value,
                        arrivalTime: arrivalTimeRef.current.value,
                        arrivalAirport: arrivalAirportRef.current.value,
                        passengerNumber: passengerNumberRef.current.value,
                        passengerLimit: passengerLimitRef.current.value
      
    
                });
                navigate('/viewflights');
            } catch (error) {
                console.log('Oh no! Something went wrong');
            }
        }

        
    }

    return (
        <form className="MyForm" onSubmit={handleSubmit}>
            <Center><h3>Add a Flight</h3></Center>
            <br />
            <Center>
                <label htmlFor="flightNumber">Flight Number:   </label>
                    <div>
                        <input id="flightNumber" type="text" placeholder="Flight Number" ref={flightNumberRef}/> 
                    </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="departureDate">Departure Date:  </label>
                <div>
                    <input id="departureDate" type="date" placeholder="Departure Date" ref={departureDateRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="departureTime">Departure Time:  </label>
                <div>
                    <input id="departureTime" type="time" placeholder="Departure Time" ref={departureTimeRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="departureAirport">Departure Airport:  </label>
                <div>
                    <input id="departureAirport" type="text" placeholder="Departure Airport" ref={departureAirportRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="arrivalDate">Arrival Date:  </label>
                <div>
                    <input id="arrivalDate" type="date" placeholder="Arrival Date" ref={arrivalDateRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="arrivalTime">Arrival Time:  </label>
                <div>
                    <input id="arrivalTime" type="time" placeholder="Arrival Time" ref={arrivalTimeRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="arrivalAirport">Arrival Airport:  </label>
                <div>
                    <input id="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="passengerNumber">Passenger Number:  </label>
                <div>
                    <input id="passengerNumber" type="number" placeholder="Passenger Number" ref={passengerNumberRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="passengerLimit">Passenger Limit:  </label>
                <div>
                    <input id="passengerLimit" type="number" placeholder="Passenger Limit" ref={passengerLimitRef}/> 
                </div>
            </Center>

            <br />

            <Center>
                <div>
                    <input type="submit" value="Add Flight" />
                </div>
            </Center>

        </form>
    );
}
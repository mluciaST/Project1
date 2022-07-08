//import { useEffect, useState } from 'react';
import axios from 'axios';
import { Center } from '../components/StyledComponents/StyledComponents';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

export const Update = () => {

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
        try {
            await axios.put('http://localhost:8042/flights/', 
            {
                flights: {
                    fligtNumber: flightNumberRef.current.value,
                    departureDate: departureDateRef.current.value,
                    departureTime: departureTimeRef.current.value,
                    departureAirport: departureAirportRef.current.value,
                    arrivalDate: arrivalDateRef.current.value,
                    arrivalTime: arrivalTimeRef.current.value,
                    arrivalAirport: arrivalAirportRef.current.value,
                    passengerNumber: passengerNumberRef.current.value,
                    passengerLimit: passengerLimitRef.current.value
                }
            });
            navigate('../', {replace: true});
        } catch (error) {
            console.log('Oh no! Something went wrong');
        }
    }

    return (
        <div>
            <div>
                <Center><h3>Enter the Flight ID to update: </h3></Center>
                <br />
                <div>
                    <Center><input id="Flight ID" type="text" placeholder="Flight ID"/></Center>
                </div>
                <Center>
                    <div>
                        <input type="submit" value="Update Flight" />
                    </div>
                </Center>
            </div>
            
        <form className="MyForm" onSubmit={handleSubmit}>
            <Center><h3>Add a Flight</h3></Center>
            <br />
            <Center>
                <label htmlFor="flightNumber">Flight Number:   </label>
                    <div>
                        <input id="flightNumber" type="text" placeholder="Flight Number" ref={this.flights}/> 
                    </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="departureDate">Departure Date:  </label>
                <div>
                    <input id="departureDate" type="date" placeholder="Departure Date"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="departureTime">Departure Time:  </label>
                <div>
                    <input id="departureTime" type="time" placeholder="Departure Time"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="departureAirport">Departure Airport:  </label>
                <div>
                    <input id="departureAirport" type="text" placeholder="Departure Airport"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="arrivalDate">Arrival Date:  </label>
                <div>
                    <input id="arrivalDate" type="date" placeholder="Arrival Date"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="arrivalTime">Arrival Time:  </label>
                <div>
                    <input id="arrivalTime" type="time" placeholder="Arrival Time"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="arrivalAirport">Arrival Airport:  </label>
                <div>
                    <input id="arrivalAirport" type="text" placeholder="Arrival Airport"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="passengerNumber">Passenger Number:  </label>
                <div>
                    <input id="passengerNumber" type="number" placeholder="Passenger Number"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="passengerLimit">Passenger Limit:  </label>
                <div>
                    <input id="passengerLimit" type="number" placeholder="Passenger Limit"/> 
                </div>
            </Center>

            <br />

            <Center>
                <div>
                    <input type="submit" value="Update Flight" />
                </div>
            </Center>

            

        </form>
               
        </div>
    
    );
}
import { useState } from 'react';
import axios from 'axios';
import { Center } from '../components/StyledComponents/StyledComponents';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


export const FlightRow = ({flight, flights, setFlights}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [originalFlightData, setOriginalFlightData] = useState({...flight}); // Sitting as backup if we cancel out of edit mode
    const [flightData, setFlightData] = useState({...flight});


    const handleDelete = (event, _id) => {
        event.preventDefault();
        axios.delete(`http://localhost:8042/flights/${_id}`);
        setFlights(flights.filter(flight => flight._id !== _id));
    }

    const handleCancel = (event) => {
        event.preventDefault();
        setOriginalFlightData(originalFlightData);
        setFlightData(originalFlightData);
        setIsEdit(false);
    }

    const handleEdit = async (event) => {
        try {
            event.preventDefault();
            console.log(flightData);
            await axios.put(`http://localhost:8042/flights/${flightData._id}`, {...flightData});
            setFlightData(flightData);
            setIsEdit(false);
        } catch(err) {
            console.log(err); 
            alert(err?.response?.data?.message);
            //display error message/logic
        }
        
    }

    if (isEdit) { 
        return (      
            <tr>
                <td><Center>{isEdit ? <input className="edit-input" value={flightData.flightNumber} onChange={(e) => setFlightData({...flightData, flightNumber: e.target.value})}/> : flight.flightNumber }</Center></td>

                <td><Center>{
                isEdit 
                ? <input className="edit-input" value={new Date(flightData.departureDate)?.toISOString()?.substring(0, 10)} type="date" onChange={(e) => setFlightData({...flightData, departureDate: e.target.value})} />
                : new Date(flight.departureDate)?.toLocaleString('en-US', {timeZone: 'UTC'})?.split('T')[0]
                }</Center></td>

                {/* new below */}

                <td><Center>{isEdit ? <input className="edit-input" value={flightData.departureTime} onChange={(e) => setFlightData({...flightData, departureTime: e.target.value})} type="time" /> : flight.departureTime}</Center></td>

                <td><Center>{isEdit ? <input className="edit-input" value={flightData.departureAirport} onChange={(e) => setFlightData({...flightData, departureAirport: e.target.value})}/> : flight.departureAirport }</Center></td>

                <td><Center>{
                isEdit 
                ? <input className="edit-input" value={new Date(flightData.arrivalDate)?.toISOString()?.substring(0, 10)} type="date" onChange={(e) => setFlightData({...flightData, arrivalData: e.target.value})} />
                : new Date(flight.arrivalDate)?.toLocaleString('en-US', {timeZone: 'UTC'})?.split('T')[0]
                }</Center></td>

                <td><Center>{isEdit ? <input className="edit-input" value={flightData.arrivalTime} onChange={(e) => setFlightData({...flightData, arrivalTime: e.target.value})} type="time" /> : flight.arrivalTime}</Center></td>

                <td><Center>{isEdit ? <input className="edit-input" value={flightData.arrivalAirport} onChange={(e) => setFlightData({...flightData, arrivalAirport: e.target.value})}/> : flight.arrivalAirport }</Center></td>

                <td><Center>{isEdit ? <input className="edit-input" value={flightData.passengerNumber} onChange={(e) => setFlightData({...flightData, passengerNumber: e.target.value})}/> : flight.passengerNumber }</Center></td>

                <td><Center>{isEdit ? <input className="edit-input" value={flightData.passengerLimit} onChange={(e) => setFlightData({...flightData, passengerLimit: e.target.value})}/> : flight.passengerLimit }</Center></td>

                <td><Center><button onClick={(e) => {handleEdit(e)}}><CheckIcon></CheckIcon></button></Center></td>
                <td><Center><button onClick={(event) => handleCancel(event, isEdit)}><CloseIcon></CloseIcon></button></Center></td>

                {/* <td><Center><button onClick={() => setIsEdit(true)}><EditIcon></EditIcon></button></Center></td>
                <td><Center><button onClick={(event) => handleDelete(event, flight._id)}><DeleteIcon></DeleteIcon></button></Center></td> */}
            </tr>
        )
    } else {
        return (

            <tr>
                <td><Center>{flightData.flightNumber}</Center></td>
                <td><Center>{flightData.departureDate}</Center></td>
                <td><Center>{flightData.departureTime}</Center></td>
                <td><Center>{flightData.departureAirport}</Center></td>
                <td><Center>{flightData.arrivalDate}</Center></td>
                <td><Center>{flightData.arrivalTime}</Center></td>
                <td><Center>{flightData.arrivalAirport}</Center></td>
                <td><Center>{flightData.passengerNumber}</Center></td>
                <td><Center>{flightData.passengerLimit}</Center></td>
                <td><Center><button onClick={() => setIsEdit(true)}><EditIcon></EditIcon></button></Center></td>
                <td><Center><button onClick={(event) => handleDelete(event, flight._id)}><DeleteIcon></DeleteIcon></button></Center></td>
            </tr>

        );
    }
}
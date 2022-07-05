import { Center } from "../StyledComponents/StyledComponents";


export const Form = () => {
    return (
        <form>
            <Center><h3>Add a Flight</h3></Center>
            <br />
            <Center>
                <label htmlFor="Flight">Flight Number:   </label>
                    <div>
                        <input id="Flight Number" type="text" placeholder="Flight Number"/> 
                    </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Departure Date">Departure Date:  </label>
                <div>
                    <input id="Departure Date" type="date" placeholder="Departure Date"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Departure Time">Departure Time:  </label>
                <div>
                    <input id="Departure Time" type="time" placeholder="Departure Time"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Departure Airport">Departure Airport:  </label>
                <div>
                    <input id="Departure Airport" type="text" placeholder="Departure Airport"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Arival Date">Arrival Date:  </label>
                <div>
                    <input id="Arrival Date" type="date" placeholder="Arrival Date"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Arival Time">Arrival Time:  </label>
                <div>
                    <input id="Arrival Time" type="time" placeholder="Arrival Time"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Arival Airport">Arrival Airport:  </label>
                <div>
                    <input id="Arrival Airport" type="text" placeholder="Arrival Airport"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Passenger Number">Passenger Number:  </label>
                <div>
                    <input id="Passenger Number" type="number" placeholder="Passenger Number"/> 
                </div>
            </Center>

            <br />

            <Center>
                <label htmlFor="Passenger Limit">Passenger Limit:  </label>
                <div>
                    <input id="Passenger Limit" type="number" placeholder="Passenger Limit"/> 
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
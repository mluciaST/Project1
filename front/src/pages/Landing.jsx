import { Center } from "../components/StyledComponents/StyledComponents";


export const Landing = () => {
    
    return (
               
        <div>
            <Center><h2>Welcome to Mango Airlines! </h2></Center>

            <Center><p><strong><em>Smooth travel is a click away.</em></strong></p></Center>

            <p id="homeParagraph"><em>
                
                We at Mango Airlines want your travel to be as seamless as possible. 
                
                </em></p>
                

            <p id="homeParagraph"><em>
                Whether you are booking your destination wedding, viting friends and family, or going on the adventure of your dreams, Mango Airlines will take you there. Forget your 
                worries of squashed seating, loud companions, and stale snacks - our 100% hammock-based experience gently soothes our passengers as they fly, 
                each with a fresh-made Mango Smoothie in hand. 

                </em></p>

            <p id="homeParagraph"><em>

                Use this nagivation to add, view, update or remove your flights at ease.  
                
                </em></p>

            <br />

            {/* <Center><div>
                
                <img src={require("../travel-image.jpg")} height="350vh" alt="travelimage"/>
            
            </div></Center> */}

        </div>
        
    );
}
import { Center } from "../components/StyledComponents/StyledComponents";


export const Landing = () => {
    
    return (
               
        <div>
            <Center><h2>Welcome to Mango Airlines! </h2></Center>

            <Center><p>Smooth travel is a click away. </p></Center>

            <p id="homeParagraph">
                
                We at Mango Airlines want your travel to be as seamless as possible. </p>
                

                <p id="homeParagraph">
                Whether you are booking your destination wedding, viting friends and family, or going on the adventure of your dreams, Mango Airlines will take you there. Forget your 
                worries of squashed seating, loud companions, and stale snacks - our 100% hammock-based exerience gently soothes our passengers as they fly, 
                each with a fresh-made Mango Smoothie in hand. 

                </p>
                <p id="homeParagraph">

                Use this nagivation to add, view, update or remove your flights at ease.  
                
            </p>

            <br />

            {/* <Center><div>
                
                <img src={require("../travel-image.jpg")} height="350vh" alt="travelimage"/>
            
            </div></Center> */}

        </div>
        
    );
}
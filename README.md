# Project 1: Mango Airlines

## Description:

This project is of an airline database using MongoDB/Mongoose from the perspective of management with all necessary permissions.
This works in conjunction with React and CSS for a UI that has the functionality to add, update, view, and delete flight information.

### Each flight will have the following:

    -Flight Number
    -Departure Date
    -Arrival date
    -Departure time
    -Arrival time
    -Departure airport
    -Arrival airport
    -Current number of passengers
    -Passenger limit

### Project Info:

    -JavaScript
    -MongoDB/Mongoose
    -Express.js
    -React
    -CSS/Styled-Components
    
### Updates as of 7/7/2022
    -UI is finalized with home page, add flight page, and view flights page
        -the ability to edit and delete flights using MUI icons is included in the view flights page at the end of each row
        -while in edit mode, the edit and delete buttons change to confirm and cancel buttons to save or cancel edits
    -All CRUD functions working properly and connected to front end
    -Validation added to the passenger limit requirement
    -Cosmetic updates to website in general to clean up user experience and make the layout more intuitive

### Updates as of 6/22/2022

    -Created the basics of the MongoDB database with the axios, dotenv, express, and mongoose dependencies.
    -Set up index.js and .env
    -Connected to MongoDB Atlas and corrected prior issues with connection
    -Created a basic flight model and solidified some starting functionality in the flight controller and flight route
    -Corrected issues connecting to Postman within index.js

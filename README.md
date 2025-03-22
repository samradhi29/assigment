School Management App
This is a school management application where users can add new schools and view a list of schools sorted by distance from their current location.
Tech Stack
Node.js
Express
MySQL
React
CSS
Features

Add School: Users can add a new school by sending a POST request from the frontend to the /addschool API.

List Schools: Users can view schools sorted by distance from their current location using the /listschools API, which accepts the user's latitude and longitude as parameters.

Distance Calculation: The Haversine Formula is implemented on the backend to calculate the distance between the user's location and each school accurately.

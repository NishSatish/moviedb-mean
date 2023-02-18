# Movie Titles Dashboard App

## Setup Instructions
  * Clone the repository
  * Both the frontend and backend directories have package.json files. Run 'npm install' in both directories.
  * The backend is hardcoded to run on port 3001. Run 'npm run dev' in the backend directory to start the server
  * To start the frontend server, run 'ng serve' in the directory (default port 4200).
  
## Thought Process
  With prior experience in building CRUD apps and also in some frontend libraries like Angular Material, I was able to picture a pretty good idea of how
  to go about solving the problem. One of the first things I noticed was that in this particular problem we didn't need MongoDB, but I understood it was 
  part of the assignment and found a way to integrate it as well. I focused on functionality more than anything, and in the end worked on a bit of 
  responsiveness as well.
  
## Design Choices
  Frontend-wise, I saw the example that was sent with the problem and decided to go with Angular Material as it had the required components. I chose 4
  movies as dummy data for the app, to give the dashboard a more complete look.
  The backend is made up of a pretty standard express.js structure. It is a REST API with 3 endpoints. For the storage I decided to go with Firebase as it
  is free and has an easy-to-use SDK. Overall, this standard REST based setup was good enough to solve the problem.
  
## Libraries and Dependencies
  * Angular Material (for frontend design components)
  * Mongoose (ORM to interact with MongoDB from the server)
  * Axios (to make HTTP requests in the backend)
  * TMDB API (to get movie data)
  * Firebase Cloud Storage (to store images for posters and videos for trailers)
  * MongoDB Atlas (to host the database which stores URLs of posters and trailers)
  
## If This Was For Production
  * Would have focused on more styling in the frontend. 
  * A lot of hardcoded sensitive variables like API keys. In production they need to be passed securely as environment variables.
  * Caching can be used to cache frequently accessed data to load all interactions quicker.
  * Nodemon cannot be used in production, instead monitoring tools like pm2 can be used.

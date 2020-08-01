# Techolution-Assignment

This repo contains assignment work given by Techolution company for UI Developer Intern as a Screening task.

React.js is used in the Assignment for implementing Frontend structure and handling Dom events , styling is done using Css only and Backend is implemented using Node.js, Express.js.

server -> It contains index.js file which is our server that serves json data coming from data.js file at "localhost:3001/api/students" endpoint.

client -> inside src file all the component files are present. Here are basically 4 components - header/footer , home, studentResultBoard and admissionForm.
every component has its own css file for styling the corresponding component. Our App.js component renders these 4 components using react-router.

To run server as well as client on your local machine -

Open command line and make sure first start the server than client for making data api (endpoint) available.

For Server -> This sets the api endpoint at "localhost:3001/api/students"

step 1 : cd into Techolution-Assignment/server.

step 2 : type npm install and Enter.

step 3 : After the above dependencies gets installed, type npm start.

For Client -> This client file will run at port 3000. so "localhost:3000" is the solution endpoint.

step 1 : cd into Techolution-Assignment/client.

step 2 : type npm install and Enter.

step 3 : After the dependencies gets installed, type npm start and Enter.

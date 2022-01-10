Author: Jane Valencia

# CRA with React-Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tools
Main dependencies used for this project:
1. JSON Server: Fake API (fast backend for demo) https://github.com/typicode/json-server#getting-started
2. Materialise-CSS 
3. Redux, React-Redux
4. Redux-Thunk
5. Sass (optional)
6. PropTypes (optional) - alternative to TypeScript
7. React Moment (optional) - handling datetime format

# Get Started

## Installation

```
// Init your react app
npx create-react-app <name_of_your_app>

// Install json-server (fake backend API) and concurrently (so we can run two things at once in script)
yarn i -D json-server concurrently
npm i -D json-server concurrently

// MaterialiseCSS
npm i materialize-css@next

// Sass so it can be compiled to css
npm i -D sass

// For formatting date
npm i moment react-moment

// prop-types
npm i prop-types

// Install redux
npm i redux react-redux redux-thunk redux-devtools-extension
```

## Setup JSON Fake API
1. Setup db.json file on your root project, the folder which has your package.json
2. Paste the following sample data

```
// rootProject/db.json

{
    "logs": [
        {
            "id": 1,
            "message": "Changed network card in server 007",
            "attention": false,
            "priority": "Urgent",
            "ITperson": "Adele Hopkins",
            "date": "2020-06-22T15:46:10.179Z"
        },
        {
            "id": 2,
            "message": "Setup 1Password account for the new hire: Leena Li",
            "attention": false,
            "priority": "Low",
            "ITperson": "Ryan Seen",
            "date": "2020-06-15T11:30:10.179Z"
        },
        {
            "id": 3,
            "message": "Fixed hard drive on workstation 22B",
            "attention": true,
            "priority": "High",
            "ITperson": "Adele Hopkins",
            "date": "2020-06-15T11:30:10.179Z"
        }
    ],
    "ITpersons": [
        {
            "id": 1,
            "firstName": "Adele",
            "lastName": "Hopkins"
          },
          {
            "id": 2,
            "firstName": "Ryan",
            "lastName": "Seen"
          }
    ]
}
```

Test the Fake API on Postman. Here, we set the API to port **8001**. You can set it with the port of your choice.

Try to fetch GET request to:
- http://localhost:8001/logs 
- http://localhost:8001/ITpersons

## Setup Script

```
  "scripts": {
    "start": "react-scripts start",
    "serve-backend": "json-server --watch db.json --port 8001",
    "dev": "concurrently \"npm start\" \"npm run serve-backend\"",
  },
```

## Setup Proxy

Proxy would be used for the backend API.

Add proxy to package.json:

```
  "proxy": "http://localhost:8001"
```

## Setup Materialise-CSS

The material-design-icons: https://google.github.io/material-design-icons/#icon-font-for-the-web

On public/index.html => link the materialise-CSS to the header as you would normally with Bootstrap CDN or FontAwesome.

```
    <!-- Material-Design-Icons & Font as we are using Materialise-CSS -->
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
```

To be able to start using the Materialise-CSS, we need to import the CSS and JS at the start of our App.

In App.js =>
```
import React, { useEffect }from 'react';

// Always import the .min version
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect( () => {
    // Initialise Materialise JS at the start of the app
    // Now we would be able to use Modals and all the Materialise stuff that requires JS
    M.AutoInit();
  });
  
return (
    <div className="App">
    My App
    </div>
  );
}
export default App;
```

# Run

Execute the following scrip to start web dev server
```
npm run dev
```

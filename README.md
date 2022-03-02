#Picky Eater API
- Deployed API on Heroku [here](https://picky-eaters.herokuapp.com/) <br>
- Frontend Repo [here]() <br>
- Project Spec [here](https://frontend.turing.edu/projects/module-3/showcase.html)

## Background

This server was created to accompany the user interface of 'Picky eater', a frontend Mod 3 project at the Turing School of Software and Design. We used the Taste of Home "70 Dinners to Make for Your Picky Eater"[here](https://www.tasteofhome.com/collection/kid-friendly-meals-for-picky-eaters/). The data was trimmed down to 50 recipes because a couple recipes were repeats. This server was written in JavaScript using Express and Node.

## Installation Instructions

1. Clone down this repo to your local machine:
    - `git@github.com:Fordo29/picky-eater-api.git`
2. Change into the new directory:
    - `cd picky-eater-api`
3. Install the dependencies:
    - `npm install`
4. To fire up the server, run:
    - `node server.js` or `nodemon server.js`(if you have nodemon installed)
5. In the browser or postman, use the following endpoints with the base URL: http://localhost:3001/ to retrieve data. 
6. You can also use the following endpoints(besides books, takes you there automatically) on the deployed Heroku API linked above. 

## Endpoints

| Description | URL         | Method      | Required Properties for Request | Sample Sucessful Response |
| ----------- | ----------- | ----------- | ------------------------------- | ------------------------- |
| Get All Recipes | `http://localhost:3001/api/v1/foods` | GET | none | array containing all recipe objects |    
| Get Single Recipe | `http://localhost:3001/api/v1/foods/:food_id` <br> *where food_id will be the id number of single recipe* | GET | none | array containing an object of single recipe info |

## Technologies Used

- Express
- JavaScript
- Node
- Heroku
- Postman

## Authors
- [Christine Rowland](https://github.com/Fordo29)

- Project Manager: [Robbie Jaeger](https://github.com/robbiejaeger)
- Project Manager: [Hannah Hudson](https://github.com/hannahhch)

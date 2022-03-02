const express = require('express');
const app = express();
const recipes = require('./data');

app.set('port', 3001);
app.locals.title = 'Picky Eater';
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.locals.foods = recipes;

app.get('/', (request, response) => {
  response.send('Welcome to the Picky Eater API!');
});

app.get('/api/v1/foods', (request, response) => {
  const foods = app.locals.foods;
  if(!foods) {
    response.status(500).json({ error })
  }
  response.status(200).json({foods})
});

app.get('/api/v1/foods/:food_id', (request, response) => {
  const foodId = parseInt(request.params.food_id);
  

  const recipe = app.locals.foods.find(food => {
    return foodId === food.id;
  });

  response.json({ recipe });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  console.log('request to root route');
})

app.get('/cat1', function(req, res){
  console.log('request to cat1 route');

  const cat_details = {
    name: 'Cuddles',
    favorite_food: 'Spaghetti',
    age: 1,
    image: 'images/cat1.jpg',
    sleeping_spots: [
      {name: 'under the bed'},
      {name: 'in the sunbeam'}
    ]
  }
  
  res.render('details', {'details': cat_details});
})

app.get('/cat2', function(req, res){
  console.log('request to cat2 route');
  
  const cat_details = {
    name: 'Snuggles',
    favorite_food: 'Sardines',
    age: 0.5,
    image: 'images/cat2.jpg',
    sleeping_spots: [
      {name: 'on the window sill'},
      {name: 'on the ottoman'}
    ]
  }
  
  res.render('details', {'details': cat_details});
})

app.get('/cat3', function(req, res){
  console.log('request to cat3 route');
  
  const cat_details = {
    name: 'Sir Hungries',
    favorite_food: 'Tuna',
    age: 5,
    image: 'images/cat3.jpg',
    sleeping_spots: [
      {name: 'in the bathtub'},
      {name: 'on the sofa'}
    ]
  }
  
  res.render('details', {'details': cat_details});
})

app.listen(7777, function(){
  console.log('Express app listening on port 7777');
})
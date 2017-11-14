var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4217);
app.use(express.static('views'));

app.get('/',function(req,res){
	res.render('home');
});

app.get('/breakfast',function(req,res){
	var rec = [];
	rec.meal = "Breakfast";
	var recipes = [];
	recipes.push({'name':'Overnight Oats','link':'https://wholefully.com/8-classic-overnight-oats-recipes-you-should-try/'})
	recipes.push({'name':'Baked Eggs','link':'https://altonbrown.com/baked-eggs/'})
	recipes.push({'name':'Scrambled Eggs','link':'http://www.geniuskitchen.com/recipe/gordon-ramsays-scrambled-eggs-186294'})
	rec.recipes = recipes;
	res.render('mealList', rec);
});

app.get('/dinner',function(req,res){
	var rec = [];
	rec.meal = "Dinner";
	var recipes = [];
	recipes.push({'name':'Salmon and Couscous','link':'https://www.jamieoliver.com/recipes/fish-recipes/salmon-and-couscous/'})
	recipes.push({'name':'Colombian Chicken Stew','link':'http://www.seriouseats.com/recipes/2012/05/colombian-chicken-stew-with-potatoes-tomato-onion-recipe.html'})
	recipes.push({'name':'Lentil Salad','link':'http://www.foodnetwork.com/recipes/alton-brown/lentil-salad-recipe-1946945'})
	rec.recipes = recipes;
	res.render('mealList', rec);
});

app.get('/drinks',function(req,res){
	var rec = [];
	rec.meal = "Drinks";
	var recipes = [];
	recipes.push({'name':'Rob Roy','link':'http://www.seriouseats.com/recipes/2010/02/rob-roy-scotch-whisky-vermouth-recipe.html'})
	recipes.push({'name':'Corpse Reviver, no.2','link':'https://drinkstraightup.com/2013/01/29/corpse-reviver-no-2/'})
	recipes.push({'name':'Margarita','link':'https://altonbrown.com/margarita-recipe/'})
	rec.recipes = recipes;
	res.render('mealList', rec);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Website Located at http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});

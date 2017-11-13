var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3354);
app.use(express.static('views/images'));

app.get('/',function(req,res){
	res.render('home');
});

app.get('/breakfast',function(req,res){
	var rec = [];
	rec.meal = "Breakfast";
	var recipes = [];
	recipes.push({'name':'Overnight Oats','link':'https://wholefully.com/8-classic-overnight-oats-recipes-you-should-try/'})
	rec.recipes = recipes;
	res.render('mealList', rec);
});

app.get('/dinner',function(req,res){
	var rec = [];
	rec.meal = "Dinner";
	var recipes = [];
	recipes.push({'name':'Salmon and Couscous','link':'https://www.jamieoliver.com/recipes/fish-recipes/salmon-and-couscous/'})
	rec.recipes = recipes;
	res.render('mealList', rec);
});

app.get('/drinks',function(req,res){
	var rec = [];
	rec.meal = "Drinks";
	var recipes = [];
	recipes.push({'name':'Rob Roy','link':'http://www.seriouseats.com/recipes/2010/02/rob-roy-scotch-whisky-vermouth-recipe.html'})
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

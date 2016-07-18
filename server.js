/**
 * Created by mlingolu on 7/11/16.
 */

var express= require('express');
var path =require('path');


var app= express();
app.use(express.static(path.join(__dirname,'public')));


var travelApp= express();
var restaurantApp= express();
var moviesApp=express();
var carApp=express();

app.use('/travel',travelApp);
app.use('/restaurants',restaurantApp);
app.use('/movies',moviesApp);
app.use('/cars',carApp);




app.listen('3000',function () {
    console.log('Application is running on port 3000');
});

var express = require('express');

var app = express();

app.use(express.static('public'));

var demList = ['Franklin Delano \"Wheels\" Roosevelt', 'James K. \"Accordion Hero\" Polk', 'Grover \"Nonconsecutive\" Cleveland', 'Martin \"Muttenchops\" Van Buren', 'Franklin \"Who Is This Again\" Pierce', 'Woodrow \"No Fun Buns\" Wilson', 'John F. \"Too Soon?\" Kennedy', 'Jimmy \"Still Kickin\'\" Carter', 'Bill \"Saxman\" Clinton', 'Barack \"Saddam Hussein\" Obama'];
var repubList = ['Abraham \"Beard Machine\" Lincoln', 'Richard \"Tricky Dick\" Nixon', 'William Howard \"Beachball\" Taft', 'William \"The Mountain\" McKinley', 'Teddy \"The Bear\" Roosevelt', 'Gerald \"Lincoln Mercury\" Ford', 'Herbert \"F*** The Poor\" Hoover', 'Calvin \"And Hobbes\" Coolidge', 'Warren G. \"The Regulator\" Harding', 'Benjamin \"I\'ll Button You Up\" Harrison'];

app.get('/democrats', function(req, res){
  res.send(demList);
});

app.get('/republicans', function(req, res){
  res.send(repubList);
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port ' + port + '...');
})

var express = require( 'express' );

var port = 1337;
var app = express();

//express.static servers static files from the provided directory
app.use( express.static( 'client/html' ) );
app.use( express.static( 'bower_components/' ) );
app.use( express.static( 'client/js' ) );
app.use( express.static( 'client/css' ) );

app.listen( port, function(){
  console.log('Server started on a ', port, 'port.');
});
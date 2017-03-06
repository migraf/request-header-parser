var express =  require("express");
var app  =  express();

app.set('port', (process.env.PORT || 5000));

function parseHeaders(headers){
    
};

app.all("/", function(req, res){
    var headers = req.headers;
    //res.send(headers);
    var agents = headers["user-agent"];
    var system = agents.substring(agents.indexOf("(") +1, agents.indexOf(")"));
    res.json({"ip": headers["x-forwarded-for"],  "language": headers["accept-language"].split(",")[0], "system": system});
})



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
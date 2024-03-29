
var users = require('./users');//ประกาศเพื่อให้สามารถเรียกใช้ function ในไฟล์ user.js ได้r users
var articles = require('./articles');

/* โหลด Express มาใช้งาน */
var app = require('express')();
var bodyParser = require('body-parser');


 
/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

 
/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});


//*** user ***
app.get('/user', function (req,res) {
    res.json(users.findAll());
});

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});


app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});



//*** articles ***
app.get('/articles', function (req,res) {
    res.json(articles.findAll());
});

app.get('/articles/:id', function (req, res) {
    var id = req.params.id;
    res.json(articles.findById(id));
});

//new Article
app.post('/newarticle', function (req, res) {
    var json = req.body;
    // res.send(res.httpRequestStatusCode);
    res.send('Add new Subject : ' + json.subject + ' Completed!');
});



/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});



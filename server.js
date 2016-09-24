var express = require('express');
var morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();
app.use(morgan('combined'));
app.use(favicon(path.join(__dirname,'ui','favicon.ico')));

var pages = {
    'aboutme' : {
        title : 'Profile | About Me',
        heading : 'About Me',
        content : `
                <div class="hangup">
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>`
    },
    'education' : {
        title : 'Profile | Education',
        heading : 'Education',
        content : `
                <div class="hangup">
                    <ul>
                        <li><strong>Graduation:</strong> B.Sc. Mathematics</li>
                        <li><strong>College:</strong> Madura College, Madurai</li>
                        <li><strong>University:</strong> Madurai Kamaraj University</li>
                        <li><strong>Year:</strong> 1997 - 2000</li>
                        <li><strong>Technical:</strong> PGDCA (Post Graduate Diploma in Computer Applications)</li>
                    </ul>
                </div>`
    },
    'career' : {
        title : 'Profile | Career',
        heading : 'Career',
        content : `
                <div class="hangup">
                    <ul>
                        <li>Started my career as a XML Editor.</li>
                        <li>Moved on to typesetting industry as a composer.</li>
                        <li>Then started developing templates for overseas clients using the world reknowned typesetting application.</li>
                        <li>Then moved on to R&D team as a solution developer.</li>
                        <li>Currently working as a developer in Chennai. We provide typesetting solutions for major production companies around the globe.</li>
                    </ul>
                </div>`
    },
    'hobbies' : {
        title : 'Profile | Hobbies',
        heading : 'Hobbies',
        content : `
                <div class="hangup">
                    <ul>
                        <li><strong>Travel & Food:</strong> I love to travel a lot in search of good and authentic food. I love to watch all the food and travel related videos.</li>
                        <li><strong>Music:</strong> I love to listen to tamil movie songs. Ilayaraja is my favourite music director.</li>
                    </ul>
                </div>`
    }
};

function createPage(data){
 /*   var title = data.title;
    var heading = data.heading;
    var content = data.content;*/
    var myhtml = `
                <html>
                    <head>
                        <title>${data.title}</title>
                        <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                    <body>
                        <h3 class="subhead">${data.heading}</h3>
                        <div class="subpages">${data.content}</div>
                        <script type="text/javascript" src="/ui/main.js"></script>
                    </body>
                </html>`;
    return myhtml;
};

var counter = 0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:pageid', function(req,res){
    var pageid = req.params.pageid;
    res.send(createPage(pages[pageid]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

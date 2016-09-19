var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var pages = {
    'page1' : {
        title : 'Page 1',
        heading : 'About Me',
        content : `
            <p>paragraph 1</p>
            <p>paragraph 2</p>`
    },
    'page2' : {
        title : 'Page 2',
        heading : 'Education',
        content : `
            <p>paragraph 1</p>
            <p>paragraph 2</p>`
    },
    'page3' : {
        title : 'Page 3',
        heading : 'Career',
        content : `
            <p>paragraph 1</p>
            <p>paragraph 2</p>`
    },
    'page4' : {
        title : 'Page 4',
        heading : 'Hobbies',
        content : `
            <p>paragraph 1</p>
            <p>paragraph 2</p>`
    }
};

function createPage(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var myhtml = `<html><head><title>${title}</title></head>
                <body><h3>${heading}</h3><div>${content}</div></body></html>`;
    return myhtml;
};

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

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

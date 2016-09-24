var button = document.getElementById('counter');
var value = document.getElementById('count');
button.onclick = function(){
    //create a new request object
    var request = new XMLHttpRequest();
    //check the request status change
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                value.innerHTML = counter.toString();
            }
        }
        //Not yet done
    };
    request.open('GET','http://krish1212.imad.hasura-app.io/counter',true);
    request.send(null);
};

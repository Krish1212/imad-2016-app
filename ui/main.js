console.log('Loaded!');
var boxme = document.getElementsByClassName('box-block');
//console.log(boxme);
Array.from(boxme).forEach(function(node){
    node.addEventListener("mouseover",function(){
        var showme = node.childNodes;
        for(var i=0; i < showme.length; i++) {
            if(showme[i].className === 'hangup') {
                showme[i].style.display = 'block';
                showme[i].style.bottom = '55px';
            }
        }
    },false);
    node.addEventListener("mouseout",function(){
        var showme = node.childNodes;
        for(var i=0; i < showme.length; i++) {
            if(showme[i].className === 'hangup') {
                showme[i].style.display = 'none';
            }
        }
    },false);
});

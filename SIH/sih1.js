var div1=document.getElementById('image1');
var div2=document.getElementById('image2');
var div3=document.getElementById('image3');
var div4=document.getElementById('image4');
var div5=document.getElementById('image5');

var display=0;

function hideShow1(){
    if(display==0){
        div1.style.display='block';
        display=1;
    }
    else{
        div1.style.display='none';
        display=0;
    }
}
function hideShow2(){
    if(display==0){
        div2.style.display='block';
        display=1;
    }
    else{
        div2.style.display='none';
        display=0;
    }
}
function hideShow3(){
    if(display==0){
        div3.style.display='block';
        display=1;
    }
    else{
        div3.style.display='none';
        display=0;
    }
}
function hideShow4(){
    if(display==0){
        div4.style.display='block';
        display=1;
    }
    else{
        div4.style.display='none';
        display=0;
    }
}
function hideShow5(){
    if(display==0){
        div5.style.display='block';
        display=1;
    }
    else{
        div5.style.display='none';
        display=0;
    }
}
var imgObj = null;

function init() {
    imgObj=document.getElementById('myImage');
    imgObj.style.position = 'relative';

    imgObj.style.left = '0px';
    imgObj.style.bottom ='0px';
    imgObj.style.right = '0px';
    imgObj.style.top = '0px';

    
}
window.onload =init;
function moveRight() {
    imgObj.style.left =parseInt(imgObj.style.left) +10+'px'
}
function moveLeft() {
    imgObj.style.left =parseInt(imgObj.style.left) -10+'px'
}
function moveTop() {
    imgObj.style.top =parseInt(imgObj.style.top) +10+'px'
    
}
function moveBottom() {
    imgObj.style.top =parseInt(imgObj.style.top) -10+'px'
    
}
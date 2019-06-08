var paint = document.getElementById("canvans");
var currentColor = "black";
var heightsize = 4;
var widthsize = 4;
var ispaint = true;
paint.addEventListener('mousedown', start = function () {
    paint.addEventListener('mousemove', startpaint);
});

paint.addEventListener('mouseup', stop_paint = function () {
    paint.removeEventListener('mousemove', startpaint);
});

function startpaint(eventobject) {
    console.log(eventobject);
    var x = eventobject.offsetX;
    var y = eventobject.offsetY;
    if (ispaint === true){
    var newpaint = document.createElement("div");
    newpaint.className += "paint";
    newpaint.style.height = heightsize + "px";
    newpaint.style.width = widthsize + "px";
    newpaint.style.backgroundColor = currentColor;
    }
    if (ispaint === false){
        var newpaint = document.createElement("span");
        newpaint.className += "sticker"; 
    }
    newpaint.style.left = x + "px";
    newpaint.style.top = y + "px";
    
    var canvans = document.getElementById("canvans");
    canvans.appendChild(newpaint);
    newpaint.setAttribute('id', 'paintbrush');
}




color = document.getElementsByClassName("colorbox");
var colorchocie = document.getElementById("colorchocice");

var color_info = document.getElementById("colorinfo");
color_info.style.backgroundColor = currentColor;



color[0].addEventListener('click', (e) => {
     ispaint = true;
    console.log(color);
    currentColor = e.target.id;
    color_info.style.backgroundColor = currentColor;

});
color[1].addEventListener('click', (e) => {
     ispaint = true;
    console.log(color);
    currentColor = e.target.id
    color_info.style.backgroundColor = currentColor;
});

color[2].addEventListener('click', (e) => {
    ispaint = true;
    console.log(color);
    currentColor = e.target.id;
    color_info.style.backgroundColor = currentColor;

});
color[3].addEventListener('click', (e) => {
    ispaint = true;
    console.log(color);
    currentColor = e.target.id
    color_info.style.backgroundColor = currentColor;
});
color[4].addEventListener('click', (e) => {
    ispaint = true;
    console.log(color);
    currentColor = e.target.id
    color_info.style.backgroundColor = currentColor;
});
color[5].addEventListener('click', (e) => {
    ispaint = true;
    console.log(color);
    currentColor = e.target.id
    color_info.style.backgroundColor = currentColor;
});

var clean = document.getElementById("clean");
clean.addEventListener('click', cleanit = function () {

    deletest = document.getElementById("canvans");

    deletest.innerHTML = "";
});

var brush_size = document.getElementById("sizeinfo");

var plus = document.getElementById("plusfontSize");
plus.addEventListener('click', biggerFont = function () {
    heightsize++;
    widthsize++;
    brush_size.innerHTML = heightsize;

});

var minus = document.getElementById("minusfontSize");
minus.addEventListener('click', biggerFont = function () {
    heightsize--;
    widthsize--;
    if (heightsize < 0)
        heightsize = 0;
    brush_size.innerHTML = heightsize;
});

var sticker = document.getElementById("sticker");
sticker.addEventListener('click',sticker_apper = function(){
ispaint = false;
} );


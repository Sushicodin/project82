canvas=document.getElementById("theCoolCanvas");
ctx=canvas.getContext("2d");

color="black";
WidthOfLine=2;


var mousesEvents="empty";
var lastpositionX, lastpositionY;

canvas.addEventListener("Mousedown",my_mouseDown);
function my_mouseDown(e){
    color=document.getElementById("colorInput").value;
    WidthOfLine=document.getElementById("widthInput").value;
    radiusOfTheline=document.getElementById("radius").value;
    mousesEvents="Mousedown";
}

    canvas.addEventListener("MouseUp",my_mouseUp);
function my_mouseUp(e){
    mousesEvents="MouseUp";
}

    canvas.addEventListener("MouseLeave",my_mouseLeave);
function my_mouseLeave(e){
    mousesEvents="MouseLeave";
}

canvas.addEventListener("MouseMove",my_mouseMove);
function my_mouseMove(e){
    current_position_of_X=e.clientX - canvas.offsetLeft;
    current_position_of_Y=e.clientY - canvas.offsetTop;

    if(mousesEvents=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=WidthOfLine;
        ctx.arc(current_position_of_X, current_position_of_Y, radius, 0, 2 * Math.PI);
        
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }
last_position_of_X=current_position_of_X
last_position_of_Y=current_position_of_Y
}
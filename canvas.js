let canvas = document.querySelector("#canvas-board");
let colorPicker = document.querySelector("#color-picker");
let lineWidthRange = document.querySelector("#line-width-range");
let lineWidthLabel = document.querySelector("#line-width-label");
let x = 0;
let y = 0;
let isMouseDown = false;

let context = canvas.getContext("2d");
context.lineCap = ""
colorPicker.addEventListener("change", changeColor);
function changeColor(event){
    let color = event.target.value;
    context.strokeStyle = color;
}
lineWidthRange.addEventListener("input", changeWidth);
function changeWidth(event){
    let range = event.target.value;
    lineWidthLabel.innerText = range;
    context.lineWidth = range;
}
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawLine);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseOut", stopDrawing);

function startDrawing(event){
    x = event.offsetX;
    y = event.offsetY;
    isMouseDown = true;
}
function stopDrawing(){
    isMouseDown = false;
}
function drawLine(event){
    if(isMouseDown){
        let newx = event.offsetX;
        let newy = event.offsetY;
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(newx, newy);
        context.stroke();
        x=newx;
        y=newy;
    }
}
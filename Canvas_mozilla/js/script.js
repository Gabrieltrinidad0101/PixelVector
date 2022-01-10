const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


var x = canvas.width/2 
var y = canvas.height - 30 

var dx = 2
var dy = -2

var ballRadius = 10

var paddleHeight = 10
var paddleWidth = 75
var paddleX = (canvas.width-paddleWidth)/2

var rightPressed = false
var leftPressed = false

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var score = 0

var lives = 3

var brick = [];
for(c=0; c<brickColumnCount; c++) {
    brick[c] = [];
    for(r=0; r<brickRowCount; r++) {
         brick[c][r] = { x: 0, y: 0, status: 1 };
    }
}


function drawScore(){
    ctx.font = "16px Arial"
    ctx.fillStyle = "#0095DD"
    ctx.fillText("Score: "+score,8,20)
}

function drawLives(){
    ctx.font = "16px Arial"
    ctx.fillStyle = "#0095DD"
    ctx.fillText("lives: "+lives,canvas.width-65,20)
}

function drawPaddle(){
    ctx.beginPath()
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight,)
    ctx.fillStyle = "#0095DD"
    ctx.fill();
    ctx.closePath();
}
function drawBricks(){
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if(brick[c][r].status == 1){
                var brickX = (c*(brickWidth + brickPadding))+brickOffsetLeft
                var brickY = (r*(brickHeight + brickPadding))+brickOffsetTop
                brick[c][r].x = brickX;
                brick[c][r].y = brickY;
                ctx.beginPath()
                ctx.rect(brickX,brickY,brickWidth,brickHeight)
                ctx.fillStyle = "#0095DD"
                ctx.fill();
                ctx.closePath();
            }
            
        }
    }
}

function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = brick[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++
                    if(score === brickRowCount*brickColumnCount){
                        document.location.reload();
                        alert("YOU WIN, CONGRATULATIONS!");
                    }
                }
            }
        }
    }
}

function drawBall(){
    ctx.beginPath()
    ctx.arc(x,y,ballRadius,0,Math.PI*2)
    ctx.fillStyle = "#0095DD"
    ctx.fill();
    ctx.closePath();
}


const keyDownHandler = (e)=>{
    if(e.keyCode === 39){
        rightPressed = true
    }else if(e.keyCode === 37){
        leftPressed = true
    }
}

const keyUpHandler = (e)=>{
    if(e.keyCode === 39){
        rightPressed = false
    }else if(e.keyCode === 37){
        leftPressed = false
    }
}

const mouseMoveHandler = (e)=>{
    var relativeX = e.clientX
    if(relativeX> 0 && relativeX < canvas.width){
        paddleX = relativeX -paddleWidth/2
    }
}

document.addEventListener("keydown",keyDownHandler,false)
document.addEventListener("keyup",keyUpHandler,false)
document.addEventListener("mousemove",mouseMoveHandler,false)


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBricks()
    drawBall()
    drawPaddle()
    drawScore() 
    drawLives()
    collisionDetection()
    if(y + dy < ballRadius){
        dy = -dy;
    }else if(y + dy > canvas.height-ballRadius){
        if(x > paddleX-10 && x < paddleX+10 + paddleWidth){
            dy = -dy
        }else{
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                var a = Math.random()*2
                dy = -2
                if(a > 1){
                    dx = -2
                }else{
                    dx = 2
                }
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx = -dx +Math.random()
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7
    }
    if(leftPressed && paddleX > 0){
        paddleX -= 7
    }
    x += dx
    y += dy


}

setInterval(draw,10)


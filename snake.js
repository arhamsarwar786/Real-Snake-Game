
/////////////////////////////////// START  //////////////////////////////////

var cvs=document.getElementById("canvas")
var ctx=cvs.getContext("2d")
var snakeW=20;
var snakeH=20;
var dir="right"

                              // Draw Snake Function

function drawSnake(x,y){
ctx.fillStyle="white"
ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
ctx.fillStyle="black"
ctx.strokeRect(x*snakeW,y*snakeH,cvs.width,snakeH)
}


var len=4;
snake=[];
for(var i=len-1;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
}

                        // key Contol Function

document.addEventListener("keydown",dirControl)
function dirControl(e){
    if(e.keyCode==37 && dir!="right"){
        dir="left"
    }
    else if(e.keyCode==38 && dir!="down"){
        dir="up"
    }
    else if(e.keyCode==39 && dir!="left"){
        dir="right"
    }
    else if(e.keyCode==40 && dir!="up"){
        dir="down"
    }
    else if(e.keyCode==65){setInterval(drow,50)}
    else if(e.keyCode==32){alert("PAUSE\n"+"Press 'SPACE BAR' again to RESUME GAME")}
    else if(e.keyCode==82){
        var len=4;
        snake=[];
        for(var i=len-1;i>=0;i--){
            snake.push({
                x:i,
                y:0
            })
        }}
}

                            //Create Food

var food={
    x:Math.round(Math.random()*(cvs.width/snakeW-2)+1),
    y:Math.round(Math.random()*(cvs.height/snakeH-2)+1)
}
                            //Drow food

function drowfood(x,y){
    
ctx.fillStyle="red"
ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
ctx.fillStyle="black"
ctx.strokeRect(x*snakeW,y*snakeH,cvs.width,snakeH)
}

                            //Function Drow

function drow(){
    ctx.clearRect(0,0,cvs.width,cvs.height)
for(var i=0;i<snake.length;i++)
{
    var X=snake[i].x
    var Y=snake[i].y
    drawSnake(X,Y)
}
drowfood(food.x,food.y)

                                // Snake Head

var snakeX=snake[0].x
var snakeY=snake[0].y

if(snakeX<0 || snakeY<0 || snakeX>=cvs.width/snakeW || snakeY>=cvs.height/snakeH){
    alert("GAME OVER")
}


if(dir=="right"){snakeX++}
else if(dir=="left"){snakeX--}
else if(dir=="up"){snakeY--}
else if(dir=="down"){snakeY++}


if(snakeX==food.x && snakeY==food.y){
    food={
        x:Math.round(Math.random()*(cvs.width/snakeW-2)+1),
        y:Math.round(Math.random()*(cvs.height/snakeH-2)+1)}

        var newHead={
            x:snakeX,
            y:snakeY
        }
}
else {
snake.pop();
var newHead={
    x:snakeX,
    y:snakeY
}
}

                                //New Head

snake.unshift(newHead);
}
setInterval(drow,100)

if(snake.length>snakeX){
    alert("game over")
}


//////////////////////////////// THE END  /////////////////////////////
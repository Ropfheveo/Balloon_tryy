/*var balloon,balloonImage1,balloonImage2;
var background
// create database and position variable here

function preload(){
   background =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var balloonpos = database.ref("balloon/position");
  balloonpos.on("value",readpos,showerror)


  textSize(20); 
}

// function to display UI
function draw() {
  background(backgroung);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePosition(-1,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePosition(1,0);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePosition(0,-1);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    changePosition(0,+1);
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePosition(x,y){
  // ball.x = ball.x + x;
   //ball.y = ball.y + y;
   database.ref("balloon/position").set({
       "x": position.x+x,
       "y":position.y+y 
   })
}

function readpos(data){
   position = data.val();
   balloon.x = position.x;
   balloon.y = position.y;
}

function showerror(){
   console.log("error");
}*/

 var balloon;
 var balloonImage;
 var database;
 var position;
 var bacground;

   function preload(){
     background = loadImage(".vscode/cityImage.png");
     balloonImage = loadAnimation(".vscode/hotairballoon1",".vscode/hotairballoon2",".vscode/hotairballoon3");
   }

   function setup(){
      database = firebase.database();
      console.log(database);
      createCanvas(500,500);

      balloon = createSprite(100,400,20,20);
      balloon.addAnimation("balloon",balloonImage);
      balloon.scale = 0.4;
   }

   function draw(){
     background(backgroundImage);

     if(keyDown(LEFT_ARROW)){
       balloon.x = balloon.x - 10
     }
     else if(keyDown(RIGHT_ARROW)){
       balloon.x = balloon.x + 10
     }
     else if(keyDown(UP_ARROW)){
       balloon.y = balloon.y - 10
     }
     else if(keyDown(DOWN_DOWN)){
       balloon.y = balloon.y + 10
     }
     drawSprites();
     fill(0);
     stroke("white");
     textSize(25);
     text("**Use arrow keys to move Hot Air Balloon!",40,40);
   }

   function changePosition(x,y){
    // ball.x = ball.x + x;
     //ball.y = ball.y + y;
     database.ref("balloon/position").set({
         "x": position.x+x,
         "y":position.y+y 
     })
  }
  
  function readpos(data){
     position = data.val();
     balloon.x = position.x;
     balloon.y = position.y;
  }
  
  function showerror(){
     console.log("error");
  }
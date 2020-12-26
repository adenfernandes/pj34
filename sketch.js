var dog, happyDog, database, foodS, foodStock;
var happyDogImage,dogImage;

//Create variables here

function preload()
{
  happyDogImage=loadImage("images/dogImg1.png")
  dogImage=loadImage("images/dogImg.png")
  
  
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);

  dog=createSprite(250,250,1,1)
  dog.scale=0.2
  
  dog.addImage("dog",dogImage)

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  

  
  //add styles here
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog",happyDogImage);
  }

  drawSprites();

  fill(255)
  text("Food Remaining : " +foodS, 200,400 )

  
  textSize(10)

  text("Note:press UP_ARROW key To feed Dargo Milk!", 50, 100);
}

function readStock(data){
   foodS=data.val();
}

function writeStock(x){


  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
 
}

  








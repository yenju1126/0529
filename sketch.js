let points = [[0, 5], [1, 6], [3, 7],[5,7],[7,5],[8,3],[7,0],[5,-3],[3,-5],[0,-7],[-3,-5],[-5,-3],[-7,-0],[-8,3],[-7,5],[-5,7], [-3, 7], [-1, 6], [1, 4]];
var clr1 =  "ffd6ff-e7c6ff-c8b6ff-b8c0ff-bbd0ff".split("-").map(a=>"#"+a)
var clr2 =  "3e92cc-2a628f-13293d-16324f-18435a".split("-").map(a=>"#"+a)


var ball //代表單一個物件，利用這個變數來做正在處理的物件
var balls = [] //陣列，放所有的物件資料
var bullet
var bullets = []
var score = 0

function setup() { //一顆愛心物件的設定
  createCanvas(windowWidth, windowHeight);
  for(var j=0;j<50;j=j+1)//產生幾個物件
  {
    ball = new obj({}) //產生一個新的物件
    balls.push(ball) //把Ball物件放入到balls物件群(陣列)中
  }

}

function draw() { //每秒會執行60次
  background(220);

  for(let ball of balls){ //針對陣列變數，取出陣列內一個一個的物件
    ball.draw()
    ball.update()
    //++++++++++++++由此判斷，每一顆愛心有沒有接觸每一個飛彈++++++++++++++++++
    for(let bullet of bullets){
     if(ball.isBallInRanger(bullet.p.x,bullet.p.y)) //判斷ball與bullet有沒有碰觸
     
      {
        score = score +1 //分數+1
        
        balls.splice(balls.indexOf(ball),1) //讓愛心從愛心倉庫移除
        bullets.splice(bullets.indexOf(bullet),1)  //讓飛彈從飛彈倉庫移除
      }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  }

  for(let bullet of bullets){ //針對倉庫內的資料，一筆一筆的顯示出來
    bullet.draw()
    bullet.update()
  
  }

  textSize(50)
  text(score,50,50)
  //++++++++++++++++畫出中間的砲台+++++++++++++++++++++++++
  push()
  let dx = mouseX-width/2 //滑鼠座標到中心點座標X軸的距離
  let dy = mouseY-height/2 //滑鼠座標到中心點座標Y的距離
  let angle = atan2(dy,dx) //利用反tan算出角度

  translate(width/2,height/2)
  rotate(angle) //讓三角形翻轉一個angle角度
  fill("#ffc03a")
  //noStroke()
  ellipse(0,0,60) //畫出圓形
  fill("#ff0000")
  triangle(50,0,-25,-25,-25,25) //畫出三角形
pop()
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
if (score >= 20) {
  fill(255, 0, 0);
  rect(0, 0,width,height);
  fill(255);
  textSize(500);
  textAlign(CENTER, CENTER);
  text("Win!", width / 2, height / 2);
}
}

function mousePressed(){

  //新增一筆飛彈資料(還沒有顯示)
  bullet = new Bullet({})
  bullets.push(bullet) //把這一筆資料放入飛彈倉庫

}
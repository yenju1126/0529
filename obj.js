class obj{
    constructor(args){ //預設值，基本資料(包含物件的顏色，位置，速度，大小...)
      //this.p = args.p|| {x: random(width),y:random(height)} // 一個物件初始位置
      this.p = args.p|| createVector(random(width),random(height))
      //this.v = {x: random(-1,1),y:random(-1,1)} //速度，x，y移動的速度為亂數產生-1，1之間的數字
      this.v = createVector(random(-1,1),random(-1,1)) // 產出一個x座標值為random(-1,1)，座標值為random(-1,1)
      this.size = random(5,10) // 物件大小
      this.color = random(clr1) //物件顏色
      this.stroke = random(clr2) // 線的顏色
    }
    draw() //把物件畫出來的函數
    {
      push()
        translate(this.p.x,this.p.y) //原點座標
        scale((this.v.x<0?1:-1),-1) //放大縮小指令
        strokeWeight(5)
        fill(this.color)
        stroke(this.stroke)
        beginShape()
          for(var i=0;i<points.length;i=i+1){
            curveVertex(points[i][0]*this.size,points[i][1]*this.size)
          }
        endShape()
      pop()
        
    }
    update(){ 
    //物件移動程式碼+++++++++++++++++++++
     //this.p.x = this.p.x + this.v.x
     //this.p.y = this.p.y + this.v.y
     this.p.add(this.v) //此行效果跟上面兩行一樣
     //+++++++++++++++++++++++++++++++++
  
     
     //碰壁處理程式碼++++++++++++++++++
     if(this.p.x<=0||this.p.x>=width)
     {
        this.v.x = -this.v.x
     }
     if(this.p.y<=0 || this.p.y>= height)
     {
        this.v.y = -this.v.y
     }
  
    }
    isBallInRanger(x,y){ //判斷有沒有被滑鼠按到
      let d = dist(x,y,this.p.x,this.p.y) //計算滑鼠按下的點與此物件位置之間的距離
      if(d<this.size*4){ //4的由來：去看作標點最大的值，此作為方框的高與寬
         return true //代表距離有再範圍裏面
      }else{
         return false //代表距離沒有在範圍內
      }
        
    }
  
  }
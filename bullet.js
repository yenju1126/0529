class Bullet{
    constructor(args){ //預設值，基本資料(包含物件的顏色，位置，速度，大小...)
        this.r = args.r || 10 //如果飛彈有傳回直徑的大小，就以參數為直徑，否則預設為10
        this.p = args.p || createVector(width/2,height/2) //飛彈起始位置(以向量方式表示該座標)
        this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(5) //飛彈的速度
        this.color = args.color || "red" //物件顏色
    }
    draw(){ //劃出飛彈
        push()
           translate(this.p.x,this.p.y)
           fill(this.color)
           noStroke()
           ellipse(0,0,this.r)
        pop()

    }
    update(){ //計算移動後的位置
        this.p.add(this.v)


    }
}
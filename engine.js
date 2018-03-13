var mouse = {x:-window.innerWidth, y:-window.innerHeight} //ovo me zeza nesto 
class Engine{
    constructor(width,height,numStars,speed){
        this.width      = width;
        this.height     = height;
        this.numStars   = numStars;
        this.speed      = speed;
        this.canvas     = document.createElement('canvas');
        this.context    = this.canvas.getContext('2d');
        this.animation  = this.animation.bind(this);
        this.stars      = new Array();
        this.time       = Date.now();
    }
   
    initalize(){
       
       this.setCanvas(this.canvas,this.width,this.height);
       this.setStars();
       this.eventHandle();
       this.animation();
       
    }
    setCanvas(c,w,h) {
        c.width  = w;
        c.height = h;
        document.body.appendChild(this.canvas);
        }
    eventHandle(){
        this.canvas.addEventListener('mousemove', function(e){
           mouse.x=e.x;
           mouse.y=e.y;
           
        })
    }
    
    setStars() {
        for(let i = 0; i < this.numStars; i++){
        let x           = randomValue(0,this.width);
        let y           = randomValue(0,this.height);
        let position    = new Vector(x,y);
        let translation = randomValue(0,this.width);
        let size        = 1;
        this.stars[i] =   new Stars(this,size,position,translation,this.speed)
        }
    }
    animation(){
        let time = Date.now();
        let delta = (time-this.time)/1000;
        this.context.clearRect(0,0,this.width,this.height);
        this.setBackground(this.context,'black',this.width,this.height)
        
        for(let i = 0; i < this.numStars; i++){
        this.stars[i].update(delta);
        this.stars[i].draw(this.context);  
    }
    this.time = time;
    requestAnimationFrame(this.animation);
}
setBackground(cx,c,w,h) {
    cx.fillStyle = c;
    cx.fillRect(0,0,w,h);
}
getWidth(){ return this.width}
getHeight(){return this.height}

}

function randomValue(min,max){
return Math.random()*(max-min +1) +min;
}







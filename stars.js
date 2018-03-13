 
class Stars{
    constructor(engine,size,position,translation,speed){
        this.engine     =   engine;
        this.size       =   size;
        this.position   =   position;
        this.translation=   translation;
        this.speed      =   speed;
    }
   update(d){
    this.translation -= this.speed;
    if(this.translation <= 0){ this.translation=this.engine.getWidth();};
   
        this.speed=mouse.x/20 -5; // ovo moze da se proverava da li je preko polal ali nisam siguran kako da ga bazdarim ako jeste
   }
   draw(c){
    var w = this.engine.getWidth();
    var h = this.engine.getHeight();
    var sp = w;   
    var cx = w / 2;
    var cy = h / 2;
    var x,y,r;
    x= (this.position.x-cx) * (sp / this.translation);
    x=x+cx;
    y=(this.position.y-cy) * (sp / this.translation);
    y=y+cy;
    r=this.size * (sp / this.translation);
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI*2, false);
    c.fillStyle = 'white';
   // c.strokeStyle =	'#0c096f';  //pogledaj i sa ovim mozda nije lose
    c.fill();
    c.stroke();
    // ovo cu morati nesto bolje smislim
    /*c.beginPath();
    c.moveTo(this.position.x,this.position.y);
    c.lineTo(x,y);
    c.strokeStyle='white'
    c.stroke();*/
    }
   
}
class Box extends BaseClass {
  constructor(x, y,img) {
    
    super ( x,y,50,50); 
    this.image = loadImage("sprites/wood1.png");
  }
  display(){
  super.display();
  }
};

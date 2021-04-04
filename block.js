class Block {
    constructor(x,y) {
      var options = {
          isStatic: false,restitution:0.2
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image=loadImage('block.png')
      this.visibility=255
    }

    display(){
      var pos =this.body.position;
      if(this.body.speed<5){
      push ()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      imageMode(CENTER);

      image(this.image,0,0, this.width, this.height);
      pop()
    }
    
    else{
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-6
      tint(255,this.visibility)
      image(this.image,pos.x,pos.y,50,50)
      pop()
    }
    }
  };
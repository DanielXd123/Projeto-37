class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton =  createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título")
    this.greeting = createElement("h2")
  }

  setElementPosition(){
    this.input.position(width/2 - 110, height / 2 - 80);
    this.playButton.position(width/2 - 90, height / 2 - 20);
    this.titleImg.position(120, 100);
    this.greeting.position(width/2 - 300, height / 2 - 100);
  }

  display(){
    this.setElementPosition();
    this.handleMousePressed();
  }

  hide(){
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

  handleMousePressed(){
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
        Olá ${this.input.value()}
        </br> espere o outro jogador entrar...
      `
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
    })
  }

}
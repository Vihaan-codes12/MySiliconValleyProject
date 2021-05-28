var Iguanodon, Iguanodon2, iguanodonImage
var Allosaurus, allosaurusImage;
var Brachiosaurus, brachiosaurusImage;
var Dilophosaurus, dilophosaurusImage;
var Pentaceratops, pentaceratopsImage;
var Pachycephalosaurus, pachycephalosaurusImage;
var Triceratops, triceratopsImage;
var Ankylosaurus, ankylosaurusImage;
var Giganotosaurus, giganotosaurusImage;
var Spinosaurus, spinosaurusImage;
var Stegosaurus, stegosaurusImage;
var Tyrannosaurus, tyrannosaurusImage;
var Amargasaurus, amargasaurusImage;
var Carnotaurus, carnotaurusImage;
var Ceratosaurus, ceratosaurusImage;
var Megaraptor, megaraptorImage;
var Saichania, saichaniaImage;
var Shunosaurus, shunosaurusImage;
var Siamosaurus, siamosaurusImage;
var Siamotyrannus, siamotyrannusImage;
var Suchomimus, suchomimusImage;
var Kentrosaurus, kentrosaurusImage;
var Torosaurus, torosaurusImage;
var cage1, cage2, cage3, cage4, cage5, cage6, cage7, cage8, cage9, cage10;
var cage11, cage12, cage13, cage14, cage15, cage16, cage17, cage18, cage19, cage20, cage21, cage22, cage23;
var cage1Image;
var dinoSavedImage;
var gameState = 0;

function preload(){
  iguanodonImage = loadImage("Iguanodon.jpg");
  allosaurusImage = loadImage("Allosaurus.jpg");
  brachiosaurusImage = loadImage("Brachiosaurus.jpg");
  dilophosaurusImage = loadImage("Dilophosaurus.jpg")
  pentaceratopsImage = loadImage("Pentaceratops.jpg");
  pachycephalosaurusImage = loadImage("Pachycephalosaurus.jpg");
  triceratopsImage = loadImage("Triceratops.jpg");
  ankylosaurusImage = loadImage("Ankylosaurus.jpg");
  giganotosaurusImage = loadImage("Giganotosaurus.jpg");
  spinosaurusImage = loadImage("Spinosaurus.jpg");
  stegosaurusImage = loadImage("Stegosaurus.jpg");
  tyrannosaurusImage = loadImage("Tyrannosaurus.jpg");
  amargasaurusImage = loadImage("Amargasaurus.jpg");
  carnotaurusImage = loadImage("Carnotaurus.jpg");
  ceratosaurusImage = loadImage("Ceratosaurus.jpg");
  megaraptorImage = loadImage("Megaraptor.jpg");
  saichaniaImage = loadImage("Saichania.jpg");
  shunosaurusImage = loadImage("Shunosaurus.jpg");
  siamosaurusImage = loadImage("Siamosaurus.jpg");
  siamotyrannusImage = loadImage("Siamotyrannus.jpg");
  suchomimusImage = loadImage("Suchomimus.jpg");
  torosaurusImage = loadImage("Torosaurus.jpg");
  kentrosaurusImage = loadImage("Kentrosaurus.jpg");
  cage1Image = loadImage("Cage.jpg");
  dinoSavedImage = loadImage("DinosaurSaved.png");
}

function setup() {
  createCanvas(1300,600);
  cage1 = createSprite(1240,30,40,40);
  cage1.addImage(cage1Image);
  cage1.scale = 0.3;
  Iguanodon = createSprite(1240,30,40,40);
  Iguanodon.addImage(iguanodonImage);
  Iguanodon.scale = 0.05;
  cage2 = createSprite(1150,30,40,40);
  cage2.addImage(cage1Image);
  cage2.scale = 0.3;
  Allosaurus = createSprite(1150,30,40,40);
  Allosaurus.addImage(allosaurusImage);
  Allosaurus.scale = 0.05;
  cage3 = createSprite(1050,30,40,40);
  cage3.addImage(cage1Image);
  cage3.scale = 0.3;
  Brachiosaurus = createSprite(1050,30,40,40);
  Brachiosaurus.addImage(brachiosaurusImage);
  Brachiosaurus.scale = 0.05;
  cage4 = createSprite(950,30,40,40);
  cage4.addImage(cage1Image);
  cage4.scale = 0.3;
  Dilophosaurus = createSprite(950,30,40,40);
  Dilophosaurus.addImage(dilophosaurusImage);
  Dilophosaurus.scale = 0.05;
  cage5 = createSprite(850,30,40,40);
  cage5.addImage(cage1Image);
  cage5.scale = 0.3;
  Pentaceratops = createSprite(850,30,40,40);
  Pentaceratops.addImage(pentaceratopsImage);
  Pentaceratops.scale = 0.05;
  cage6 = createSprite(450,30,40,40);
  cage6.addImage(cage1Image);
  cage6.scale = 0.3;
  Pachycephalosaurus = createSprite(450,30,40,40);
  Pachycephalosaurus.addImage(pachycephalosaurusImage);
  Pachycephalosaurus.scale = 0.05;
  cage7 = createSprite(350,30,40,40);
  cage7.addImage(cage1Image);
  cage7.scale = 0.3;
  Triceratops = createSprite(350,30,40,40);
  Triceratops.addImage(triceratopsImage);
  Triceratops.scale = 0.05;
  cage8 = createSprite(250,30,40,40);
  cage8.addImage(cage1Image);
  cage8.scale = 0.3;
  Ankylosaurus = createSprite(250,30,40,40);
  Ankylosaurus.addImage(ankylosaurusImage);
  Ankylosaurus.scale = 0.05;
  cage9 = createSprite(150,30,40,40);
  cage9.addImage(cage1Image);
  cage9.scale = 0.3;
  Giganotosaurus = createSprite(150,30,40,40);
  Giganotosaurus.addImage(giganotosaurusImage);
  Giganotosaurus.scale = 0.05;
  cage10 = createSprite(50,30,40,40);
  cage10.addImage(cage1Image);
  cage10.scale = 0.3;
  Spinosaurus = createSprite(50,30,40,40);
  Spinosaurus.addImage(spinosaurusImage);
  Spinosaurus.scale = 0.07;
  cage11 = createSprite(1250,170,40,40);
  cage11.addImage(cage1Image);
  cage11.scale = 0.3;
  Stegosaurus = createSprite(1250,170,40,40);
  Stegosaurus.addImage(stegosaurusImage);
  Stegosaurus.scale = 0.06;
  cage12 = createSprite(1150,170,40,40);
  cage12.addImage(cage1Image);
  cage12.scale = 0.3;
  Tyrannosaurus = createSprite(1150,170,40,40);
  Tyrannosaurus.addImage(tyrannosaurusImage);
  Tyrannosaurus.scale = 0.05;
  cage13 = createSprite(1050,170,40,40);
  cage13.addImage(cage1Image);
  cage13.scale = 0.3;
  Amargasaurus = createSprite(1050,170,40,40);
  Amargasaurus.addImage(amargasaurusImage);
  Amargasaurus.scale = 0.07;
  cage14 = createSprite(950,170,40,40);
  cage14.addImage(cage1Image);
  cage14.scale = 0.3;
  Carnotaurus = createSprite(950,170,40,40);
  Carnotaurus.addImage(carnotaurusImage);
  Carnotaurus.scale = 0.05;
  cage15 = createSprite(850,170,40,40);
  cage15.addImage(cage1Image);
  cage15.scale = 0.3;
  Ceratosaurus = createSprite(850,170,40,40);
  Ceratosaurus.addImage(ceratosaurusImage);
  Ceratosaurus.scale = 0.06;
  cage16 = createSprite(750,170,40,40);
  cage16.addImage(cage1Image);
  cage16.scale = 0.3;
  Megaraptor = createSprite(750,170,40,40);
  Megaraptor.addImage(megaraptorImage);
  Megaraptor.scale = 0.05;
  cage17 = createSprite(650,170,40,40);
  cage17.addImage(cage1Image);
  cage17.scale = 0.3;
  Saichania = createSprite(650,170,40,40);
  Saichania.addImage(saichaniaImage);
  Saichania.scale = 0.09;
  cage18 = createSprite(550,170,40,40);
  cage18.addImage(cage1Image);
  cage18.scale = 0.3;
  Shunosaurus = createSprite(550,170,40,40);
  Shunosaurus.addImage(shunosaurusImage);
  Shunosaurus.scale = 0.07;
  cage19 = createSprite(450,170,40,40);
  cage19.addImage(cage1Image);
  cage19.scale = 0.3;
  Siamosaurus = createSprite(450,170,40,40);
  Siamosaurus.addImage(siamosaurusImage);
  Siamosaurus.scale = 0.06;
  cage20 = createSprite(350,170,40,40);
  cage20.addImage(cage1Image);
  cage20.scale = 0.3;
  Siamotyrannus = createSprite(350,170,40,40);
  Siamotyrannus.addImage(siamotyrannusImage);
  Siamotyrannus.scale = 0.06;
  cage21 = createSprite(250,170,40,40);
  cage21.addImage(cage1Image);
  cage21.scale = 0.3;
  Suchomimus = createSprite(250,170,40,40);
  Suchomimus.addImage(suchomimusImage);
  Suchomimus.scale = 0.07;
  cage22 = createSprite(150,170,40,40);
  cage22.addImage(cage1Image);
  cage22.scale = 0.3;
  Kentrosaurus = createSprite(150,170,40,40);
  Kentrosaurus.addImage(kentrosaurusImage);
  Kentrosaurus.scale = 0.07;
  cage23 = createSprite(50,170,40,40);
  cage23.addImage(cage1Image);
  cage23.scale = 0.3;
  Torosaurus = createSprite(50,170,40,40);
  Torosaurus.addImage(torosaurusImage);
  Torosaurus.scale = 0.06;
  
}

function draw() {
  background("cyan");  
  drawSprites();

  textSize(7.1);
  fill("red");
  text("Click the instructed key to save the dino in this order: Spinosaurus, Torosaurus, Giganotosaurus, Kentrosaurus, Ankylosaurus, Suchomimus, Tricerarops, Siamotyrannus, Pachycephalosaurus, Siamosaurus, Shunosaurus, Saichania, Megaraptor, Ceratosaurus, Carnotaurus, Amargasaurus, Tyrannosaurus, Stegosaurus, Pentaceratops, Dilophosaurus, Brachiosaurus, Allosaurus and Iguanodon!", 25,370);

  textSize(10);
  fill("orange");
  text("Iguanodon", 1220,65);

  textSize(11);
  fill("orange");
  text("I", 1240,80);

  textSize(10);
  fill("red");
  text("Stegosaurus", 1220,210);

  textSize(11);
  fill("red");
  text("N", 1240,225);

  textSize(10);
  fill("brown");
  text("Allosaurus", 1125, 65);

  textSize(11);
  fill("brown");
  text("R", 1145, 80);

  textSize(10);
  fill("green");
  text("Tyrannosaurus", 1120, 210);

  textSize(11);
  fill("green");
  text("S", 1145, 230);

  textSize(10);
  fill("black");
  text("Brachiosaurus", 1020, 65);

  textSize(11);
  fill("black");
  text("V", 1040, 80);

  textSize(10);
  fill("white");
  text("Amargasaurus", 1020,210);

  textSize(11);
  fill("white");
  text("L", 1040, 230);

  textSize(10);
  fill("yellow");
  text("Dilophosaurus", 915,70);

  textSize(10);
  fill("yellow");
  text("D", 935,90);

  textSize(10);
  fill("black");
  text("Carnotaurus", 922,210);

  textSize(11);
  fill("black");
  text("P", 942,230);

  textSize(10);
  fill("orange");
  text("Pentaceratops", 820,70);

  textSize(11);
  fill("orange");
  text("O", 840,90);

  textSize(10);
  fill("brown");
  text("Ceratosaurus", 820,210);

  textSize(11);
  fill("brown");
  text("A", 840,230);

  textSize(10);
  fill("purple");
  text("Megaraptor", 725,210);  

  textSize(11);
  fill("purple");
  text("M", 745,230);

  textSize(11);
  fill("yellow");
  text("Saichania", 625,210);

  textSize(11);
  fill("yellow");
  text("J", 645,230);

  textSize(10);
  fill("blue");
  text("Shunosaurus", 520,210);

  textSize(11);
  fill("blue");
  text("Z", 540,230);

  textSize(10);
  fill("gray");
  text("Pachycephalosaurus", 410,65);

  textSize(11);
  fill("gray");
  text("U", 430,85);

  textSize(10);
  fill("purple");
  text("Siamosaurus", 420,210);

  textSize(11);
  fill("purple");
  text("C", 440,230);

  textSize(10);
  fill("lime");
  text("Triceratops", 325,65);

  textSize(11);
  fill("lime");
  text("F", 345,85);

  textSize(10);
  fill("orange");
  text("Siamotyrannus", 320,210);

  textSize(11);
  fill("orange");
  text("H", 340,230);

  textSize(10);
  fill("red");
  text("Ankylosaurus", 220,65);

  textSize(11);
  fill("red");
  text("E", 240,85);

  textSize(10);
  fill("blue");
  text("Suchomimus", 220,210);

  textSize(11);
  fill("blue");
  text("B", 240,230);

  textSize(10);
  fill("brown");
  text("Giganotosaurus", 125,65);

  textSize(11);
  fill("brown");
  text("G", 145,85);

  textSize(10);
  fill("yellow");
  text("Kentrosaurus", 120,210);

  textSize(11);
  fill("yellow");
  text("Q", 140,230);

  textSize(13);
  fill("green");
  text("Spinosaurus", 15,70);

  textSize(11);
  fill("green");
  text("T", 35,90);

  textSize(12);
  fill("pink");
  text("Torosaurus", 20,210);

  textSize(11);
  fill("pink");
  text("Y", 40,230);

  textSize(22);
  fill("orange");
  text("You are on a mission to free the dinosaurs from the cages that make them go mad! GOOD LUCK!",50,270);


  function freeDinosaurs(){
    if(keyDown("t")){
      cage10.visible = false;
      Spinosaurus.scale = 0.1;
    }

    if(keyDown("y")){
      cage23.visible = false;
      Torosaurus.scale = 0.09;
    }

    if(keyDown("g")){
      cage9.visible = false;
      Giganotosaurus.scale = 0.09;
    }

    if(keyDown("q")){
      cage22.visible = false;
      Kentrosaurus.scale = 0.09;
    }

    if(keyDown("e")){
      cage8.visible = false;
      Ankylosaurus.scale = 0.09;
    }

    if(keyDown("b")){
      cage21.visible = false;
      Suchomimus.scale = 0.09;
    }

    if(keyDown("f")){
      cage7.visible = false;
      Triceratops.scale = 0.09;
    }

    if(keyDown("h")){
      cage20.visible = false;
      Siamotyrannus.scale = 0.09;
    }

    if(keyDown("u")){
      cage6.visible = false;
      Pachycephalosaurus.scale = 0.09;
    }

    if(keyDown("c")){
      cage19.visible = false;
      Siamosaurus.scale = 0.09;
    }
    
    if(keyDown("z")){
      cage18.visible = false;
      Shunosaurus.scale = 0.1;
    }

    if(keyDown("j")){
      cage17.visible = false;
      Saichania.scale = 0.15;
    }

    if(keyDown("m")){
      cage16.visible = false;
      Megaraptor.scale = 0.09;
    }

    if(keyDown("a")){
      cage15.visible = false;
      Ceratosaurus.scale = 0.09;
    }

    if(keyDown("p")){
      cage14.visible = false;
      Carnotaurus.scale = 0.09;
    }

    if(keyDown("l")){
      cage13.visible = false;
      Amargasaurus.scale = 0.15
    }

    if(keyDown("s")){
      cage12.visible = false;
      Tyrannosaurus.scale = 0.15
    }

    if(keyDown("n")){
      cage11.visible = false;
      Stegosaurus.scale = 0.12;
    }

    if(keyDown("o")){
      cage5.visible = false;
      Pentaceratops.scale = 0.09;
    }

    if(keyDown("d")){
      cage4.visible = false;
      Dilophosaurus.scale = 0.09;
    }

    if(keyDown("v")){
      cage3.visible = false;
      Brachiosaurus.scale = 0.06;
    }

    if(keyDown("r")){
      cage2.visible = false;
      Allosaurus.scale = 0.09;
    }

    if(keyDown("i")){
      cage1.visible = false;
      Iguanodon.scale = 0.09;
      gameState = 1;
    }

    if(gameState === 1){
      background(dinoSavedImage);
      background.scale = 1;
      textSize(25);
      fill("orange");
      text("Congratulations! You've freed all of the dinosaurs!", 300,50);
    }

  }

  freeDinosaurs();
}


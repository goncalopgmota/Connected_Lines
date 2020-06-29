function preload(){
  img = loadImage('Picture.png');
}

let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadImage('Picture.png', img => {
    image(img, 0, 0, windowWidth, windowHeight);
    stroke(255, 255, 0);
  line(width/2, height, width/2, -height);
  stroke(255, 255, 0);
  line(width, height/2, -width, height/2);
  });
  
  greeting = createElement('h2', 'Welcome. Please enter your current hour, and click on your location to start.');
  greeting.position(windowWidth/2 - windowWidth/4, windowHeight/2 - 50);
  
  socket = io.connect("http://localhost:5001");
			
  socket.on('connect', function() {
    print("Connected");
  });
  
  socket.on('clear', function (data) {
      print('data: ' + int(data[0]) + ", " + int(data[1]));
    
  });
  
  background(200);
  stroke(255, 255, 0);
  line(width/2, height, width/2, -height);
  stroke(255, 255, 0);
  line(width, height/2, -width, height/2);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}

function mousePressed() {
  greeting.remove();
  socket.emit("toMax", ["mouse", mouseX+mouseY]);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    socket.emit("toMax", ["test"]);
  }
  if (keyCode === LEFT_ARROW) {
    socket.emit("toMax", ["-test"]);
}
  if (keyCode === UP_ARROW) {
    socket.emit("toMax", ["test2"]);
  }
  if (keyCode === DOWN_ARROW) {
    socket.emit("toMax", ["-test2"]);
  }
  if (keyCode === ALT) {
    socket.emit("toMax", ["VST"]);
  }
  if (keyCode === ESCAPE) {
    socket.emit("toMax", ["-VST"]);
  }
}
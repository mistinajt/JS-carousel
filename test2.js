var $imageDiv = document.getElementById('image');
var $images = [];
var i = 0;
var $right = document.getElementById('right');
var $left = document.getElementById('left');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b = [b1, b2, b3, b4];

$images[0]= new Image();
$images[0].src = "apple.jpeg";

$images[1]= new Image();
$images[1].src = "bubble.jpeg";

$images[2]= new Image();
$images[2].src = "nature.jpg";

$images[3]= new Image();
$images[3].src = "rose.jpeg";

b1.style.background = "white";

$right.addEventListener('click', function () {
  b[i].style.background = "transparent";
  if(i==$images.length - 1){
   i=0;
  }
  else {
    i++
  }
  document.getElementById("slika").src= $images[i].src;
  b[i].style.background = "white";
})

$left.addEventListener('click', function () {
  b[i].style.background = "transparent";
  if (i != 0) {
  i--;
  }
  else {
  i = $images.length - 1
  }
  document.getElementById("slika").src= $images[i].src;
    b[i].style.background = "white";
})

b1.addEventListener('click', function() {
  document.getElementById("slika").src= $images[0].src;
  b1.style.background = "white";
  b2.style.background = "transparent";
  b3.style.background = "transparent";
  b4.style.background = "transparent";
})

b2.addEventListener('click', function() {
  document.getElementById("slika").src= $images[1].src;
  b2.style.background = "white";
  b1.style.background = "transparent";
  b3.style.background = "transparent";
  b4.style.background = "transparent";
})

b3.addEventListener('click', function() {
  document.getElementById("slika").src= $images[2].src;
  b3.style.background = "white";
  b2.style.background = "transparent";
  b1.style.background = "transparent";
  b4.style.background = "transparent";
})

b4.addEventListener('click', function() {
  document.getElementById("slika").src= $images[3].src;
  b4.style.background = "white";
  b2.style.background = "transparent";
  b3.style.background = "transparent";
  b1.style.background = "transparent";
})

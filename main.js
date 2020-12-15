$('#mainBtn1').click(function(){
  window.location = 'gallery.html';
});

$('#mainBtn2').click(function(){
  window.location = 'order.html';
});

$('#mainBtn3').click(function(){
  window.location = 'index.html';
});

// ----------------- Main Auto SlideShow

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("autoSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}


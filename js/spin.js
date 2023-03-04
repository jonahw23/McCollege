var global = false

function myfunction() {
  if(!global){
  global = true;
  document.getElementById('box').style.transform = "rotate(" + 926 + "deg)";

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  var text = document.getElementById('fade-in-text');
  text.classList.remove('animate');
  setTimeout(function() {
    text.classList.add('animate');
    element.classList.add('animate');
  }, 5000); //5000 = 5 second
  }
}

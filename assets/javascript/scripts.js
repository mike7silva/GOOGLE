function searchinit (form) {
  var browser = document.getElementById("browser").value;
  location.assign("https://www.google.com.mx/search?q="+browser);
  document.getElementById("browser").value="";
}
document.querySelector('#browser').addEventListener('keypress', function keyupText(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    e.preventDefault();
    searchinit(document.querySelector('.form'));
  }
})

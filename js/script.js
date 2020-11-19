function init(){
//add your javascrip between these two lines of code
  var m=document.querySelectorAll("h2.center").innerHTML;
  var s=document.getElementById("entryinput").vlaue;
  alert(m+":"+s);
  document.getElementById("textoutput").innerHTML=s;
}
  window.addEventListener('load', init);

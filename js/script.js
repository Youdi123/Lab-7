function init(){
//add your javascrip between these two lines of code
  var s=document.getElementById("entryinput").vlaue;
  var m=document.getElementsByTagName("h2").innerHTML;
  alert(m+":"+s);
  document.getElementById("textoutput").innerHTML=s;
}
  window.addEventListener('load', init);

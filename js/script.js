function init(){
//add your javascrip between these two lines of code
  var m=document.getElementsByTagName("h2").innerHTML;
  var s=document.getElementById("entryinput").vlaue;
  alert(m+":"+s);
  document.getElementById("textoutput").innerHTML=s;
}
  window.addEventListener('load', init);

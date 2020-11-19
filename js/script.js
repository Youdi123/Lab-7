function init(){
//add your javascrip between these two lines of code
  document.getElementById("Entrybutton").addEventlistener('click',v);
  function v() {
   var s,y;
   y=document.getElementsByTagName("h2").item(0).innerHTML;
   s=document.getElementById("entryinput").vlaue;
   document.getElementById("textoutput").innerHTML=s;
   alert(y+":"+s);
}
  window.addEventListener('load', init);
}

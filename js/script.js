function init(){
//add your javascrip between these two lines of code
  var m=document.getElementsTagName("h2.center")【0】.innerHTML;
  var s=document.getElementById("entryinput").vlaue;
  document.getElementById("textoutput").innerHTML=s;
  alert(m+":"+s);
}
  window.addEventListener('load', init);

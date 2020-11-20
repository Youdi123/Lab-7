function init() {
//add your javascrip between these two lines of code
    var m = document.getElementById("entrybutton");
    var s = document.getElementById("entryinput").value;
    var y = document.getElementsByTagName("h2").item(0).innerHTML;
    alert(y + ": " + s);
    document.getElementById("textoutput").innerHTML = s;
}
m.addEventListener("click", init);
window.addEventListener('load', init);

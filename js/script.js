function init() {
//add your javascrip between these two lines of code
    var s = document.getElementById("entryinput").value;
    var y = document.getElementsByTagName("h2").item(0).innerHTML;
    alert(y + ": " + s);
    document.getElementById("textoutput").innerHTML = s;
}
window.addEventListener('load', init);

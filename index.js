
var display_bar=document.getElementById("display_bar")
function addToScreen(n){
    var prev = display_bar.value;
    display_bar.value=prev+n
}
function clearDisplay(){
    display_bar.value=''
}
function equal(){
    display_bar.value=eval(display_bar.value)
}
function remove(){
    var l=display_bar.value.length
    display_bar.value=display_bar.value.slice(0,l-1)

}
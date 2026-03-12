function add_to_display (value){
document.getElementById("solve").value+=value
}
function clear_display (){
    document.getElementById("solve").value=""
}
function calculate(){
    var expression=document.getElementById("solve").value
    var result=eval(expression)
    document.getElementById("solve").value=result
}
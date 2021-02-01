function pagebtn() {
    document.getElementById("list").style.visibility = "visible";
    document.getElementById("pageline").style.width = "1000px";
    document.getElementById("page").style.fontStyle = "italic";
    document.getElementById("pageline").style.transform = "translateX(-1000px)";
    document.getElementById("pageline").style.transitionDuration = "0.5s";
}
function pagebtn1() {
    document.getElementById("list").style.visibility ="hidden";
    document.getElementById("page").style.fontStyle = "normal";  
    document.getElementById("pageline").style.width = "0px";
    document.getElementById("pageline").style.transform = "translateX(0px)";
}

function rotatebtn() {
    for(var i = 1; i < 15; i++){
        document.getElementById("st"+ i).style.transform = "rotateX(720deg)";  
        document.getElementById("st"+ i).style.transition = "1.5s";
        document.getElementById("st"+ i).style.color = "powderblue";
        document.getElementById("st"+ i).style.opacity = "1";
    }
}
function rotatebtn5() {
    document.getElementById("text").style.visibility ="visible";  
}
function rotatebtn6() {
    document.getElementById("text").style.visibility ="hidden";  
}

function loginbtn2() {
    document.getElementById("joinfield").style.visibility = "visible";
    document.getElementById("loginfield").style.visibility = "hidden";
    document.getElementById("memberlist").style.visibility = "hidden";
 }
 function loginbtn3() {
     document.getElementById("memberlist").style.visibility = "visible";
    document.getElementById("loginfield").style.visibility = "visible";
    document.getElementById("joinfield").style.visibility = "hidden";
 }
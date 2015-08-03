/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clickhome() {
    document.getElementById("myimg").src = "photo1.jpg";
    document.getElementById("col1").style.visibility = "hidden";
    document.getElementById("col2").style.visibility = "hidden";
    document.getElementById("col3").style.visibility = "hidden";
    document.getElementById("col4").style.visibility = "hidden";
    document.getElementById("col5").style.visibility = "hidden";
    document.getElementById("col6").style.visibility = "hidden";
}
function clickoverview() {
    document.getElementById("myimg").src = "photo2.jpg";
    document.getElementById("col1").style.visibility = "visible";
    document.getElementById("col2").style.visibility = "visible";
    document.getElementById("col3").style.visibility = "hidden";
    document.getElementById("col4").style.visibility = "hidden";
    document.getElementById("col5").style.visibility = "hidden";
    document.getElementById("col6").style.visibility = "hidden";
}
function clickjlr() {
    document.getElementById("myimg").src = "photo2.jpg";
    document.getElementById("col1").style.visibility = "hidden";
    document.getElementById("col2").style.visibility = "hidden";
    document.getElementById("col3").style.visibility = "hidden";
    document.getElementById("col4").style.visibility = "hidden";
    document.getElementById("col5").style.visibility = "visible";
    document.getElementById("col6").style.visibility = "visible";
}
function clickssp() {
    document.getElementById("myimg").src = "photo2.jpg";
    document.getElementById("col1").style.visibility = "hidden";
    document.getElementById("col2").style.visibility = "hidden";
    document.getElementById("col3").style.visibility = "visible";
    document.getElementById("col4").style.visibility = "visible";
    document.getElementById("col5").style.visibility = "hidden";
    document.getElementById("col6").style.visibility = "hidden";
}



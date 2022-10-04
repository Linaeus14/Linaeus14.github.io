const bd = document.getElementsByTagName("body")[0];
const nav = document.getElementsByTagName("nav")[0];
const ft = document.getElementsByTagName("footer")[0];
const ts = document.getElementById("topselec");
const hd = document.getElementById("header1");
const an1 = document.getElementById("Activenav1");
const an2 = document.getElementById("Activenav2");
const hr = document.getElementById("line1");
const hr2 = document.getElementById("line2");
const d = document.getElementById("Dark");
const l = document.getElementById("Light");

function dark() {
    if (bd.style.color = "#3a3b3c") {
        bd.style.backgroundImage = "url('image/bg3.jpg')";
        bd.style.color = "black";
        nav.style.background = "#3a3b3c";
        ts.style.background = "#3a3b3c"
        hd.style.color = "#d0ccd0";
        an1.style.borderTop = "4px solid #d0ccd0"
        an2.style.borderTop = "4px solid #d0ccd0"
        hr.style.display = "none";
        hr2.style.display = "none";
        ft.style.background = "#3a3b3c";
        ft.style.borderTop = "4px solid #d0ccd0"
        d.style.background = "#3a3b3c";
        l.style.background = "#3a3b3c";
        localStorage.setItem("dark", true);
    }
}

function light() {
    if (bd.style.color = "black") {
        bd.style.backgroundImage = "url('image/bg.jpg')";
        bd.style.color = "#3a3b3c";
        nav.style.background = "#274156";
        ts.style.background = "#274156"
        hd.style.color = "#1C6E8C";
        an1.style.borderTop = "4px solid #1C6E8C"
        an2.style.borderTop = "4px solid #1C6E8C"
        hr.style.display = "flex";
        hr2.style.display = "flex";
        ft.style.background = "#274156";
        ft.style.borderTop = "4px solid #FBFCFF"
        d.style.background = "#274156";
        l.style.background = "#274156";
        localStorage.clear();
    }
}

d.addEventListener("click", dark);
l.addEventListener("click", light);

var darkmode = localStorage.getItem("dark");
if (darkmode == null) {
    darkmode = false;
}
else {
    JSON.parse(darkmode);
}

if (darkmode) {
    dark();
}
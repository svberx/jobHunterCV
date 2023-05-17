let pic = document.getElementsByClassName("pic");
let background = document.getElementsByTagName("body")[0];
let saber = document.getElementById("saber");    

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function backgroundColor() {
    background.style.backgroundColor = randomColor();
}
function color() {
    if (saber.matches(":hover")) {
        saber.style.color = randomColor();
    }
}

setInterval(color, 100);
setInterval(backgroundColor, 300);


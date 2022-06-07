var imageSources = ["images/second.png", "images/third.png", "images/forth.png", "images/fifth.png", "images/sixth.png", "images/seventh.png"]

var index = 0;
var a = setInterval(imgchange, 4000)

function imgchange() {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("main-img").src = imageSources[index];
    index++;

}
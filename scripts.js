var indexHome = ["Ferrari-Home1", "Ferrari-Home2", "Ferrari-Home3", "Ferrari-Home"];
var homeImg = document.getElementById('home');
var currentIndex = 0;

// Display home image
function displayHome() {
    homeImg.style.backgroundImage = "url('images/"+ indexHome[currentIndex] + ".jpg')";
    currentIndex = (currentIndex + 1) % indexHome.length;
}

setInterval(displayHome, 1500);

// Display features
var lists = document.getElementById("lists");

function openTab(name) {
    var contents = document.getElementById(name);
    var allContents = document.querySelectorAll("#contents > div");
    
    allContents.forEach(function (content) {
        content.style.display = "none";
    });
    contents.style.display = "block";

    
    switch (name) {
        case "front":
            contents.style.backgroundColor = "red";
            break;

        case "middle":
            contents.style
            break;

        case "back":

            break;

        default:
            break;
    }
}
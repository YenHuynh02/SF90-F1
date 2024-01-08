var indexHome = ["Ferrari-Home1", "Ferrari-Home2", "Ferrari-Home3", "Ferrari-Home"];
var homeImg = document.getElementById('home');
var currentIndex = 0;

// Display home image
function displayHome() {
    homeImg.style.backgroundImage = "url('images/" + indexHome[currentIndex] + ".jpg')";
    currentIndex = (currentIndex + 1) % indexHome.length;
}

setInterval(displayHome, 1500);

// Display features
function openTab(name) {
    var contents = document.getElementById(name);
    var allContents = document.querySelectorAll("#contents > div");
    var indexFeatures;

    allContents.forEach(function (content) {
        content.style.display = "none";
    });
    contents.style.display = "flex";

    if (name == "front" || name == "middle" || name == "back") {
        if (name == "front") {
            indexFeatures = "headlights";
        }

        else if (name == "middle") {
            indexFeatures = "cockpit"
        }

        else {
            indexFeatures = "taillights"
        }

        document.getElementById(indexFeatures).style.width = "50px";
        document.getElementById(indexFeatures).style.height = "50px";
        document.getElementById(indexFeatures).style.borderRadius = "50%";
    }

    else if (document.getElementById(indexFeatures).style.width == "50px") {
        if (name == "front" || name == "middle" || name == "back") {
            document.getElementById(indexFeatures).style.width = "5vw";
            document.getElementById(indexFeatures).style.height = "2vh";
            document.getElementById(indexFeatures).style.borderRadius = "0";
        }
    }
}

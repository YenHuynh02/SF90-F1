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
var status = "unchecked";
var boxContent = document.getElementById("contents");
boxContent.style.position = "absolute";

function openTab(name) {
    var contents = document.getElementById(name);
    var headlights = document.getElementById("headlights");
    var cockpit = document.getElementById("cockpit");
    var taillights = document.getElementById("taillights");
    var allContents = document.querySelectorAll("#contents > div");
    var indexFeatures;

    allContents.forEach(function (content) {
        content.style.display = "none";
    });

    switch (status) {
        case "unchecked":
            contents.style.display = "flex";
            if (name == "front") {
                indexFeatures = "headlights";
                boxContent.style.left = "200px";
                cockpit.style.display = "none";
                taillights.style.display = "none";
            }

            if (name == "middle") {
                indexFeatures = "cockpit"
                boxContent.style.right = "70px";
                headlights.style.display = "none";
                taillights.style.display = "none";
            }

            if (name == "back") {
                indexFeatures = "taillights"
                boxContent.style.right = "70px";
                headlights.style.display = "none";
                cockpit.style.display = "none";
            }
            document.getElementById(indexFeatures).style.width = "50px";
            document.getElementById(indexFeatures).style.height = "50px";
            document.getElementById(indexFeatures).style.borderRadius = "50%";
            boxContent.style.backgroundColor = "rgb(73, 72, 72)";
            status = "checked";
            break;

        case "checked":
            contents.style.display = "none";
            if (name == "front") {
                indexFeatures = "headlights";
                boxContent.style.left = "200px";
                cockpit.style.display = "flex";
                taillights.style.display = "flex";
            }

            if (name == "middle") {
                indexFeatures = "cockpit"
                boxContent.style.left = "70px";
                headlights.style.display = "flex";
                taillights.style.display = "flex";
            }

            if (name == "back") {
                indexFeatures = "taillights"
                boxContent.style.right = "70px";
                headlights.style.display = "flex";
                cockpit.style.display = "flex";
            }
            document.getElementById(indexFeatures).style.width = "5vw";
            document.getElementById(indexFeatures).style.height = "2vh";
            document.getElementById(indexFeatures).style.borderRadius = "";
            boxContent.style.backgroundColor = "transparent";
            status = "unchecked";
            break;
    }
}

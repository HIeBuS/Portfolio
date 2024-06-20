//setting navbar theme script (day/night mode)
document.querySelector("#theme-switch").addEventListener('change', function(){
    var isChecked = this.checked;
    var dayIcon = document.querySelector("#sun-icon");
    var nightIcon = document.querySelector("#moon-icon");

    if (isChecked == true){
        nightIcon.style.color = "#db8b4d";
        nightIcon.style.textShadow = "0.5px 0.5px 0 #5e5956";
        dayIcon.style.color = "#5e5956";
        dayIcon.style.textShadow = "none";
    } else {
        dayIcon.style.color = "#db8b4d";
        dayIcon.style.textShadow = "0.5px 0.5px 0 #5e5956";
        nightIcon.style.color = "#5e5956";
        nightIcon.style.textShadow = "none";
    }
});

//setting proper color to icons of navbar (day/night mode)
function setProperColor() {
    var dayIcon = document.querySelector("#sun-icon");
    dayIcon.style.color = "#db8b4d";
    dayIcon.style.textShadow = "0.5px 0.5px 0 #5e5956";
}

window.addEventListener('load', setProperColor);

//rolling up and sliding up entire list (scripts hide and show)
var navbarSwitchLabel = document.querySelector(".navbar-switch");
var entireList = document.querySelector('#entireList');

function showList(){
    entireList.classList.add('show');
}

function hideList(){
    entireList.classList.remove('show');
}

navbarSwitchLabel.addEventListener('mouseover', showList);
navbarSwitchLabel.addEventListener('mouseout', hideList);
entireList.addEventListener('mouseover', showList);
entireList.addEventListener('mouseout', hideList);

//setting proper display of list at start
function setProperDisplay(){
    entireList.classList.remove('show');
}

window.addEventListener('load', setProperDisplay);

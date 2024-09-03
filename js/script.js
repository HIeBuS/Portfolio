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
function setProperDisplayOfList(){
    entireList.classList.remove('show');
}

window.addEventListener('load', setProperDisplayOfList);

//showing contact box (phone/mail) on hover
var contactDataTile = document.querySelector(".contact-data-tile");
var socialMediaContactBox = document.querySelector(".social-media-contact-box");

contactDataTile.addEventListener('mouseover',function(){
    socialMediaContactBox.classList.add('show');
})

contactDataTile.addEventListener('mouseout',function(){
    socialMediaContactBox.classList.remove('show');
})

function setProperDisplayOfContactBox(){
    socialMediaContactBox.classList.remove('show');
}

//showing technical skills popup box
var technicalSkillsTile = document.querySelector(".technical-skills-content");
var technicalSkillsBg = document.querySelector(".technical-skills-expanded-bg");
var technicalSkillsContent = document.querySelector(".technical-skills-expanded-content");

function showTechnicalSkills() {
    technicalSkillsBg.classList.add('show');
    technicalSkillsContent.classList.add('show');
}

function hideTechnicalSkills() {
    technicalSkillsBg.classList.remove('show');
    technicalSkillsContent.classList.remove('show');
}

technicalSkillsTile.addEventListener('mouseover', showTechnicalSkills);
technicalSkillsTile.addEventListener('mouseout', hideTechnicalSkills);
technicalSkillsBg.addEventListener('mouseover', showTechnicalSkills);
technicalSkillsBg.addEventListener('mouseout', hideTechnicalSkills);
technicalSkillsContent.addEventListener('mouseover', showTechnicalSkills);
technicalSkillsContent.addEventListener('mouseout', hideTechnicalSkills);

window.addEventListener('load', hideTechnicalSkills);

//adjusting width of bottom bar, depending on scroll level
document.addEventListener('scroll', function(){
    var bottomBar = document.querySelector("#bottom-bar");
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrolledPercentage = (scrollTop / (scrollHeight -  clientHeight)) * 100;

    bottomBar.style.width = scrolledPercentage + "%";
})

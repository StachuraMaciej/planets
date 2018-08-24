//Slide out navigation
$(document).ready(function () {
    //Close info table
    $(".fa-times").click(function () {
        $(".sidebar").addClass("hide");
        $(".toggle").addClass("opacity_one");
    })
    //Open info table
    $(".toggle").click(function () {
        $(".sidebar").removeClass("hide");
        $(".toggle").removeClass("opacity_one");
    })
});
//end







var planets = [

["Jowisz", "Gazowy gigant", "1,89819", "27", "69 911km", "71 492 km", "439 264 km", "4,503mld lat", "url(img/Jowisz.jpg)"],
["Ziemia", "Planeta skalista", "5,97219", "24", "6371,008 km", "6378,137 km", "40 075,014 km", "4,504 mld lat", "url(img/Ziemia.jpg)"],
["Mars", "Planeta skalista", "6,4171", "23", "3389,5 km", "3396,2 km", "21 344 km km", "4,603mld lat", "url(img/Mars.jpg)"],
["Merkury", "Planeta skalista", "3,3011", "23", "2439,7km", "2439,7km", "15 329km", "4,503mld lat", "url(img/Merkury.jpg)"],
["Saturn", "Gazowy olbrzym", "5,6834", "26", "58 232km", "60 268km", "378 675 km", "4,503mld lat", "url(img/Saturn.jpg)"],
["Wenus", "Planeta skalista", "4,867", "24", "6051,8km", "6051,8km", "38 025 km", "4,503mld lat", "url(img/Wenus.jpg)"],
["Uran", "Lodowy olbrzym", "8,6813", "25", "25 362km", "25 559km", "160 590 km", "4,503mld lat", "url(img/Uran.jpg)"],
["Neptun", "Lodowy olbrzym", "1,02413", "26", "24 622km", "24 764km", "155 600 km", "4,503mld lat", "url(img/Neptun.jpg)"],
    
    

];



//Background changer
const planetChanger = document.querySelector('.planetChanger');
const bodyBackground = document.querySelector('body');

planetChanger.addEventListener('click', changePlanet);

function changePlanet() {
    
    let x = Math.floor(Math.random() * planets.length);
    //"Math.floor" always counts down 0,1,2,3..
   

    let elBoxed = document.getElementById('boxed_item');
    elBoxed.innerHTML = planets[x][0];

    let elInformation = document.getElementById('information_type');
    elInformation.innerHTML = planets[x][1];

    let elInformationWeight = document.getElementById('information_weight');
    elInformationWeight.innerHTML = planets[x][2] + "x10<sup>" + planets[x][3] + "</sup>";

    let elInformationRadius = document.getElementById('information_radius');
    elInformationRadius.innerHTML = planets[x][4];

    let elInformationRadiusEq = document.getElementById('information_radiusEq');
    elInformationRadiusEq.innerHTML = planets[x][5];

    let elInformationCircuit = document.getElementById('information_Circuit');
    elInformationCircuit.innerHTML = planets[x][6];

    let elInformationAge = document.getElementById('information_Age');
    elInformationAge.innerHTML = planets[x][7];

    
    
    bodyBackground.style.backgroundImage = planets[x][8];

}
//end

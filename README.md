# Challenge 1 - Dashboard SpaceX

**Opdracht:**
Challenge 2 - klok

**Student:**
Sven Luttik - 18121845

## Mijn site

Als je wilt weten hoe mijn dashboard geworden is, klik dan deze link.
[Challenge 2](https://svenluttik.github.io/Challenge-2/)


### Hoe heb ik dit allemaal gedaan?

Mijn code is opgedeeld in drie delen: Datum en tijd, analoog seconden klok en de nacht modus. 

Ik heb heel veel vershillende variabelen aangemaakt die verschillende die allemaal verschillende tijd waardes moeten weer geven. Er zal vast wel een makkelijkere en kortere manier zijn om dit te doen maar dit heb ik zelf kunnen maken, waar ik aardig trots op ben.
```
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var d = date.getDay();
var today = date.getDate();
var month = date.getMonth();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","july","August","September","October","November","December"];
```

Dit stuk code moet er voor zorgen dat de tijd 02:09 zecht en niet 2:9.
```
h = h > 9 ? h : '0' + h;
 m = m > 9 ? m : '0' + m;
```

Het volgende stuk code zorg voor een seconde teller. Ik heb dit gedaan met behulp van een youtube tutorial
```
var secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  var currentDate = new Date()
  var secondsRatio = currentDate.getSeconds() / 60
  setRotation(secondHand, secondsRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
```
Ik heb hier twee DIVs voor gemaakt. De klok en de wijzer. Met deze functie zorg ik ervoor dat wijzer roteerd aan de hand van de huidige secondes.

Dit is een simpelen if/else functie die kijkt of het later dan 18:00 of vroeger dan 06:00 is. Als het 'savonds is geeft hij de BODY de ID 'dark' wat er voor zorgt dat de kleuren veranderen. Anders haalt hij de ID weg.
```
function darkMode(){
    var date = new Date();
    var h = date.getHours();
    var d = document.getElementById('theme');
    
    if (h > 17 || h < 6){
        d.classList.add('dark');
    }else{
        d.classList.remove('dark');
    }
}
```
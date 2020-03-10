//De code voor de uren en minuten digitaal begint hier
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    document.getElementById("dateToday").innerHTML = days[d.getDay()];
    document.getElementById("timeHour").textContent = h;
    document.getElementById("timeMinute").textContent = m;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//De code voor de seconden in anoloog begint hier
var secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  var currentDate = new Date()
  var secondsRatio = currentDate.getSeconds() / 60
  setRotation(secondHand, secondsRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000)

setClock()
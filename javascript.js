//De code voor de uren en minuten digitaal begint hier
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    h = h > 9 ? h : '0' + h;
    m = m > 9 ? m : '0' + m;
    
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



//hier begint de code voor dark-mode
function darkMode(){
    var date = new Date();
    var h = date.getHours();
    var d = document.getElementById('theme');
    
    if (h > 17 || h < 6){
        d.classList.add('dark');
        console.log('nacht');
    }else{
        d.classList.remove('dark');
        console.log('dag');
    }
}

setInterval(darkMode, 1000)

darkMode();
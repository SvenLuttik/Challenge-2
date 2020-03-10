function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    var currentTime = h + ":" + m + ":" + s + " ";
    document.getElementById("time").innerText = currentTime;
    document.getElementById("time").textContent = currentTime;
    
    setTimeout(showTime, 1000);
    
}

showTime();
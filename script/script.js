function displayTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);

    var clock = document.getElementById("clock");
    clock.textContent = formattedDate + " - " + time;
}

displayTime(); 


setInterval(displayTime, 1000);



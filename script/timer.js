
var hour = document.getElementById("hour")
var min = document.getElementById("minute")
var sec = document.getElementById("sec")


function stopInterval() {
    clearInterval(Timer);
}



var reset = document.getElementById('reset')

reset.addEventListener('click', function(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    stopInterval()
})

var Timer = null;


start.addEventListener('click', function(){
    function startInterval(){
        Timer = setInterval(function() {
            Starttimer();
        }, 1000);
    }
    startInterval();
})


function Starttimer(){
    if(hour.value == 0 && min.value == 0 && sec.value == 0){
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
    } else if(sec.value != 0){
        sec.value--;
    } else if(min.value !== 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    } else if(hour.value !== 0 && min.value == 0){
        min.value = 60;
        hour.value--;
    }

    return;
}


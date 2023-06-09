

var seconds = document.getElementById("seconds")
var minsec = document.getElementById("minisec")
var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")

 var second ="00";
 var minisec="00";
  var Interval;


stop.addEventListener("click",function(){
    clearInterval(Interval);
})

reset.addEventListener("click",function(){
     resetdata()
})
 
function resetdata(){

    clearInterval(Interval);
    minisec = "00";
     second = "00";
     minsec.innerHTML = minisec;
     seconds.innerHTML = second;
}

 
start.addEventListener("click",function(){
    clearInterval(Interval);
   Interval  = setInterval( Starttimer, 10)
})


function Starttimer(){
      minisec++;

      if(minisec<9){
          minsec.innerHTML=minisec
      }
      if(minisec>9){
        minsec.innerHTML=minisec
    }

    if(minisec>99){
        second++
        seconds.innerHTML=second
        minisec=0;
        minsec.innerHTML=0
    }
    if(second > 9){
        seconds.innerHTML=second
    }
}

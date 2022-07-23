function padToTwoDigits(number) {
    return (number < 10 ? '0' : '') + number
}

setInterval(function(){var today = new Date();
var hours = today.getHours();
var time = padToTwoDigits(today.getHours()) + ":" + padToTwoDigits(today.getMinutes());
document.getElementById('time').innerHTML= time;

const element = document.getElementById('vignette')
if (hours>=18){
        document.getElementById("greeting").innerHTML= "good evening";
        element.style.cssText = 'position: fixed;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 0 600px rgba(30, 8, 71, 0.719) inset;';
    }
else if(hours>=13){
        document.getElementById("greeting").innerHTML= "good afternoon";
        element.style.cssText = 'position: fixed;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 0 600px rgba(126, 80, 10, 0.619) inset;';
    }
else if(hours>=5){
        document.getElementById("greeting").innerHTML= "good morning";
        element.style.cssText = 'position: fixed;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 0 600px rgba(27, 85, 136, 0.619) inset;';
    }
else if(hours<=5){
        document.getElementById("greeting").innerHTML= "good night!";
        element.style.cssText = 'position: fixed;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 0 600px rgba(4, 0, 45, 0.756) inset;';
    }
},10);
var bgs = ["./bg/1.webp","./bg/2.webp","./bg/3.webp","./bg/4.webp","./bg/5.webp","./bg/6.webp","./bg/7.webp","./bg/8.webp","./bg/9.webp","./bg/10.webp","./bg/11.webp","./bg/12.webp","./bg/13.webp","./bg/14.webp","./bg/15.webp","./bg/16.webp"]
var quotes = ["a fish…♪ a sea turtle…♪ a dead body…♪", " i am a busy person today, aren’t i?", "The sea~ So wide ♪ So large~♪ I've come home~✩", "“Ryuseitai” are “heroes of justice.” <br>they do not “break” “peace,” but “protect” it.", "today the weather is nice after all. <br>it feels good to bathe when the weather is nice……♪", "“Love” is deep like the “ocean.”"]
function bgSelect(){
    document.body.style.background =
          "linear-gradient(90deg, rgba(48,22,59,0.5) 0%, rgba(22,25,60,0.6) 100%), url(" + bgs[Math.floor(Math.random() * bgs.length)] + ") no-repeat fixed center ";
    document.body.style.backgroundSize="cover"

}
function quoteSelect(){
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML =
          quote;
}
setTimeout(bgSelect,10);
setTimeout(quoteSelect,10);



var bgs = ["./bg/1.webp","./bg/2.webp","./bg/3.webp","./bg/4.webp","./bg/5.webp","./bg/6.webp","./bg/7.webp","./bg/8.webp","./bg/9.webp","./bg/10.webp","./bg/11.webp","./bg/12.webp","./bg/13.webp","./bg/14.webp","./bg/15.webp","./bg/16.webp"]

document.body.style.background ="linear-gradient(90deg, rgba(48,22,59,0.5) 0%, rgba(22,25,60,0.6) 100%), url(" + bgs[Math.floor(Math.random() * bgs.length)] + ") no-repeat fixed center ";
document.body.style.backgroundSize="cover"
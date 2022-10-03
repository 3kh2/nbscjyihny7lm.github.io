// by https://3kh0.github.io pls no sue me
// no wait real-kwellercat made it

function changeSub(num) {
    document.getElementById("subtitle").innerText = say[num];
}
  
var say = [];

say[0] = "oops sorry mate"
say[1] = "get ratioed off the planet earth! \n - twitter"
say[2] = "https://bit.ly/3y4FJQH <- me"
say[3] = "thanks 3kh0, very cool!"

// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;




function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}

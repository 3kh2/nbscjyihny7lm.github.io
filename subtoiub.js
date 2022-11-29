// by https://3kh0.github.io got inspired by him
// real-kwellercat helped me to put it in my site

function changeSub(num) {
    document.getElementById("subtitle").innerText = say[num];
}
  
var say = [];

say[0] = "69,420 yes"
say[1] = "w user"
say[2] = "https://www.youtube.com/channel/UCaHSC1KLI6uINiNtO8-1qPg <- my channel"
say[3] = "this site was inspired by 3kh0!"
say[4] = "Hello world, this is TLDG."
say[5] = "Hello world, this is TLDG, this site was inspired by 3kh0, https://www.youtube.com/channel/UCaHSC1KLI6uINiNtO8-1qPg <- my channel69, 69420 yes, w user"  

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

var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18;
var wakeupTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var message = document.getElementById('timeEvent');
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
var partyTimeButton = document.getElementById('partyTimeButton');
var isPartyTime = false;
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var updateClock = function()
{
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "http://www.funnycatsite.com/pictures/In_Bread.jpg";
    messageText = "Good Evening!";
} else {
	image = "https://i.chzbgr.com/full/7771745024/hD160B19A/";
    messageText = "Good afternoon!";
}
message.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours >= noon){
        meridian = "PM";
    }
    if (hours > noon){
        hours = hours - 12;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
     clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
   }
};
var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.background = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText= "PARTY TIME!";
      partyTimeButton.style.background = "#222";
   }
};
partyTimeButton.addEventListener("click", partyEvent);
var wakeUpEvent = function()
{
    wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
var lunchTimeEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
var napEvent = function() {
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);
console.log("this code is fine");

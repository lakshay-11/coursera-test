(function (global) {

var helloSpeaker = {}; 
var speakWord="Hello";
helloSpeaker.speak=function()
{
	console.log(speakWord + " " + helloSpeaker);
}

window.helloSpeaker=helloSpeaker;

})(window);

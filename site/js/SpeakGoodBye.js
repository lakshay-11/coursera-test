(function (global) {

var byeSpeaker={};
var speakWord="Good Bye";
byeSpeaker.speak=function ()
{
	console.log(speakWord+ " " + byeSpeaker);
}

window.byeSpeaker=byeSpeaker;

})(window);


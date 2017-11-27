var interval = setInterval(() => {
    var audiolink = document.getElementsByClassName('audio-link')[0];
    if(audiolink){
	clearInterval(interval);
	var audio = document.createElement('audio');
	audio.setAttribute('src', audiolink.firstChild.href);
	audio.setAttribute('autoplay', '');
	audio.setAttribute('controls', '');
	audio.setAttribute('style', "position:absolute; top:60px; width:100%;");
	document.body.appendChild(audio);
    }
    else {
	return null;
    }
}, 200);

setTimeout(() => clearInterval(interval), 10000);

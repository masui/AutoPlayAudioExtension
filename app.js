var audioCheck = null;
var currentURL = '';

// URLが変わったかポーリングする...
setInterval(() => {
    if(location.href != currentURL){
	currentURL = location.href;
	audioCheck = setInterval(() => {
	    var audioLink = document.getElementsByClassName('audio-link')[0];
	    if(audioLink){
		clearInterval(audioCheck);
		var audio = document.createElement('audio');
		audio.setAttribute('src', audioLink.firstChild.href);
		audio.setAttribute('autoplay', '');
		audio.setAttribute('controls', '');
		audio.setAttribute('style', "position:absolute; top:60px; width:100%;");
		document.body.appendChild(audio);
	    }
	    else {
		return null;
	    }
	}, 200);
	
	setTimeout(() => clearInterval(audioCheck), 10000);
    }
}, 1000);




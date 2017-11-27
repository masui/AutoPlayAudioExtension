var audioCheck = null;
var currentURL = '';
var audioElement = null;

// URLが変わったかポーリングする...
setInterval(() => {
    console.log('interval');
    // if(location.href != currentURL && !(location.href.match(/[^\/]*gyaon[^\/]*\/[^\/]+(\/)?$/))){
    if(location.href != currentURL && !(location.href.match(/[^\/]*gyaon[^\/]*(\/)?$/))){
	if(audioElement) document.body.removeChild(audioElement);
	currentURL = location.href;
	audioCheck = setInterval(() => {
	    var audioLink = document.getElementsByClassName('audio-link')[0];
	    if(audioLink){
		clearInterval(audioCheck);
		//if(audioElement) document.body.removeChild(audioElement);
		audioElement = document.createElement('audio');
		audioElement.setAttribute('src', audioLink.firstChild.href);
		audioElement.setAttribute('autoplay', '');
		audioElement.setAttribute('controls', '');
		audioElement.setAttribute('style', "position:absolute; top:60px; width:100%;");
		document.body.appendChild(audioElement);
	    }
	    else {
		return null;
	    }
	}, 200);
	
	setTimeout(() => clearInterval(audioCheck), 10000);
    }
}, 1000);




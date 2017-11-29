var audioCheck = null;
var currentURL = '';
var audioElement = null;
var audioURL = '';

if(! window.navigator.userAgent.match(/Electron/)){
    // URLが変わったかポーリングする...
    setInterval(() => {
	console.log('interval');
	if(location.href != currentURL){
	    currentURL = location.href.replace(/\?.*$/,''); // Gyaonの本文を消す
	    if(audioElement){
		document.body.removeChild(audioElement);
		audioElement = null;
	    }
	    if(!(location.href.match(/scrapbox\.io\/[^\/]+(\/)?$/))){
		audioCheck = setInterval(() => {
		    var audioLink = document.getElementsByClassName('audio-link')[0];
		    if(audioLink){
			var newURL = audioLink.firstChild.href;
			if(newURL == audioURL) return null;
			audioURL = newURL;
			clearInterval(audioCheck);
			audioElement = document.createElement('audio');
			audioElement.setAttribute('src', audioURL);
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
	}
    }, 1000);
}




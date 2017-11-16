const id = 'playgyaonextension'

const getFirstAudio = () => {
	try {
		return document.getElementsByClassName('audio-link')[0].firstChild.href
	} catch (e) {
		return null
	}
}

const createAudio = () => {
	const src = getFirstAudio()
	if(!src){
		return document.createElement('div')
	}
	const audio = document.createElement('audio')
	const style = "position: absolute;top: 60px;width: 100%;"
	audio.setAttribute('id', id)
	audio.setAttribute('src', getFirstAudio())
	audio.setAttribute('autoplay', '')
	audio.setAttribute('controls', '')
	audio.setAttribute('style', style)

	return audio
}

(function(){
	console.log('PlayGyaonExtension')

	const oldAudio = document.getElementById(id)
	oldAudio && document.body.removeChild(oldAudio)

	setTimeout(() => {
		document.body.appendChild(createAudio())
	}, 2000)
})()

const pianoKeys = document.querySelectorAll('.key')

function playSound(urlSound){
    new Audio(urlSound).play()
}

pianoKeys.forEach((key, i) =>{

    const sound = i < 9 ? '0' + (i + 1) : (i + 1) 
    const urlSound = `24-piano-keys/key${sound}.mp3`

    key.addEventListener('click', () => playSound(urlSound))
})
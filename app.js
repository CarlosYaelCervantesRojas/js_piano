const pianoKeys = document.querySelectorAll('.key');
const volume = document.querySelector('.volume input');
const showHidde = document.querySelector('.keys-checkbox input');
const keys = document.querySelectorAll('.key span');

let sound = new Audio('sounds/ñ.wav');

function playSound(key){
    sound.src = `sounds/${key}.wav`;

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    
    clickedKey.classList.add('active');

    sound.play();

    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);

}

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playSound(key.dataset.key));
});

function pressedKey(e){
    let key = e.key;
    playSound(key);

}

function handleVolume(e){
    sound.volume = e.target.value;
}

function showHiddeKey(){
    keys.forEach(key => {
        key.classList.toggle('hidde');
    });
}

document.addEventListener('keydown', pressedKey);
volume.addEventListener('input', handleVolume);
showHidde.addEventListener('click', showHiddeKey);
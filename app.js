alert('Wht u want? i´m busy');
const buttons = document.querySelectorAll('button');

let botonDo = document.getElementById('botonDo');
const playnote =() =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note};`;

botonDo.addEventListener('click', ()=> {alert('Yolo')});
console.log(audioId);
const audio = document.getElementById(audioId);
console.log(audio);
audio.onpause();
audio.currentTime = 0;
audio.play();

buttons.forEach(
    button =>
    button.addEventListener('click', playnote));
 

    const keyNoteDown = event => {
        console.log(event);
        const key = event.key;
        console.log(key);
        const button = document.querySelector(`butto[data-key="${key}"]`);
        if(button) button.click();
    }

    document.addEventListener('keydown', keyNoteDown);

}

buttons.forEach(
    button =>
    button.addEventListener('click', playnote));

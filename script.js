const body = document.querySelector('body');
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', readText);
function readText(){
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput.value;
}

const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', changeImage)
function changeImage(){
  const memeImage = document.querySelector('#meme-image');
  memeImage.style.backgroundImage = `url(${URL.createObjectURL(memeInsert.files[0])})`
}

const clickButton = document.querySelector('.buttons');
clickButton.addEventListener('click', addBorder);
function addBorder(event) {
  const element = event.target;
  const containerImage = document.querySelector('#meme-image-container');
  if (element.contains(fire)) {
    containerImage.classList = 'fire';
  } else if (element.contains(water)) {
    containerImage.classList = 'water';
  } else if (element.contains(earth)) {
    containerImage.classList = 'earth';
  }
}

const clickMeme = document.querySelector('.memes');
clickMeme.addEventListener('click', inserirMeme);
function inserirMeme(event) {
  const element = event.target.src;
  const memeImage = document.querySelector('#meme-image');
  memeImage.style.backgroundImage = `url(${element})`
  memeImage.setAttribute('src', element)
}
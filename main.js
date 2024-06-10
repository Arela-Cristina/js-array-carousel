//inseriamo il array carousel from Dom
let arrayCarousel = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//chiamiamo il container dove si trovano gli elementi del dom
const container = document.getElementById('container');
console.log(container);

//estrapoliamo gli elementi del array 
for (let i = 0; i < arrayCarousel.length; i++) {
    let itemCarousel = arrayCarousel[i];
    console.log(itemCarousel);

    let immagini = document.createElement = `<img class="cover" src="${itemCarousel}" alt="Cover Stray Game">`;
    console.log('sono immagini', immagini);

    container.innerHTML += immagini;
}

//selezionamo tutti gli elementi in pagina
const immaginiContainer = document.getElementsByClassName('cover');
immaginiContainer[4].classList.add('active');
console.log(immaginiContainer[0]);
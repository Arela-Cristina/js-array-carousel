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

let activeitem = 0;

//selezionamo tutti gli elementi in pagina
let immaginiContainer = document.getElementsByClassName('cover');
immaginiContainer[0].classList.add('active');
console.log(immaginiContainer[0]);

//aggiungiamo eventi ai svg
let upButton = document.getElementById('up');
console.log('sono il chevron', upButton);


//facciamo andare gli uno svg  tra altro, facendo  click
upButton.addEventListener('click',
    function () {
        if (activeitem < immaginiContainer.length -1) {
            immaginiContainer[activeitem].classList.remove('active');

            activeitem++
            console.log(immaginiContainer)

            //assegniamo la clase active ad ogni elemento in maniera che appare uno alla volta.
            immaginiContainer[activeitem].classList.add('active');
        }
    });

    //aggiungiamo eventi ai svg
let downButton = document.getElementById('down');
console.log('sono il chevron', downButton);


//facciamo andare gli uno svg  tra altro, facendo  click
downButton.addEventListener('click',
    function () {
        if (activeitem > 0) {
            immaginiContainer[activeitem].classList.remove('active');

            activeitem--
            console.log(immaginiContainer)

            //assegniamo la clase active ad ogni elemento in maniera che appare uno alla volta.
            immaginiContainer[activeitem].classList.add('active');
        }
    });

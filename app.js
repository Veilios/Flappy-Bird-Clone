document.addEventListener('DOMContentLoaded', () => {

    // Grabbing elements with querySelector
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');

    // Position of the bird
    let birdLeft = 220;
    let birdBottom = 100;
    let gravity =  2;

    const startGame = () => {
        // Along with setInterval this will make the bird go down 2 pixels every 20 miliseconds as if effect by gravity
        birdBottom -= gravity;
        // Placing the bird in the correct position
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + 'px';
    };

    let timerId = setInterval(startGame, 20);
});
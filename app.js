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

    const control = (e) => {
        if (e.keyCode === 32) {
            jump();
        };
    };

    const jump = () => {
        // Everytime this function is invoked, the bird will rise 50 pixels
        if (birdBottom < 500){
            birdBottom += 50;
            bird.style.bottom = birdBottom + "px";
            console.log(birdBottom);
        };
    };
    // Everytime the Up arrow key is pressed, the jump function is executed
    document.addEventListener('keyup', control);

    const generateObstacles = () => {
        const obstacle = document.createElement('div');
    };



});
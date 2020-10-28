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

    const generateObstacle = () => {
        let obstacleLeft = 500;
        // randomHeight gives the obstacles a random height each time one is generated
        let randomHeight = Math.random() * 60;
        let obstacleBottom = randomHeight;
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        gameDisplay.appendChild(obstacle);
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';

        const moveObstacle = () => {
            // Moves obstacle to the left every 20 miliseconds
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + 'px';

            // Makes obstacle disappear when it gets all the way to the left
            if(obstacleLeft === -60) {
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
            }
        };
        let timerId = setInterval(moveObstacle, 20);
    };

    generateObstacle();


});
document.addEventListener('DOMContentLoaded', () => {

    // Grabbing elements with querySelector
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');

    // Position of the bird
    let birdLeft = 220;
    let birdBottom = 100;
    let gravity =  2;

    // Gap between obstacles
    let gap = 430;

    // Game Over ?
    let isGameOver = false;

    const startGame = () => {
        // Along with setInterval this will make the bird go down 2 pixels every 20 miliseconds as if effect by gravity
        birdBottom -= gravity;
        // Placing the bird in the correct position
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + 'px';
    };

    let gameTimerId = setInterval(startGame, 20);

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
        const topObstacle = document.createElement('div');
        if (!isGameOver) {
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('top-obstacle');
        };
        gameDisplay.appendChild(obstacle);
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';

        // Top Obstacle
        gameDisplay.appendChild(topObstacle);
        topObstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.bottom = obstacleBottom + gap + 'px';
        

        const moveObstacle = () => {
            // Moves obstacle to the left every 20 miliseconds
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + 'px';
            topObstacle.style.left = obstacleLeft + 'px';

            // Makes obstacle disappear when it gets all the way to the left
            if(obstacleLeft === -60) {
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
                gameDisplay.removeChild(topObstacle);
            }
            
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200) ||
                birdBottom === 0
            ) {
                gameOver();
                clearInterval(timerId);
            }
        };
        let timerId = setInterval(moveObstacle, 20);

        // Will make another obstacle every 3 seconds
        setTimeout(generateObstacle, 3000);
        if (!isGameOver) { setTimeout(generateObstacle, 3000)}
    };

    generateObstacle();


    const gameOver = () => {
        clearInterval(gameTimerId);
        console.log("Game Over");
        isGameOver = true;
        document.removeEventListener('keyup', control);
    };

});
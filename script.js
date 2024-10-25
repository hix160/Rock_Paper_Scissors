
function getComputerChoice() {
    const  randNum = Math.random();

    if (randNum < 0.33) {
        return 1;
    } else if (randNum < 0.66) {
        return 2;
    } else {
        return 3;
    }
}

function
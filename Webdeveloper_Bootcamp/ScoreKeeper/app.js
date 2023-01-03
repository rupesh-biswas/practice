const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const playToDiv = document.querySelector('#playToDiv');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        if (player.score === opponent.score) {
            if (winningScore - player.score === 1) {
                winningScore += 1;
                winningScoreSelect[0].value = winningScore;
                winningScoreSelect[0].text = `Tie Breaks at ${winningScore}`;
                playToDiv.classList.add('is-danger');
            }
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    playToDiv.classList.remove('is-danger');
    winningScoreSelect[0].text = winningScore;
}




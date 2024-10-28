
/* 
TODO
✅ Смена хода
✅Сообщение победы
✅Комбинация для победы
Рестарт при ничье или победе
✅Блок с информации о раунде и игре
*/

let markCells = document.querySelectorAll('.cell');
let gameStatus = document.querySelector('.game__status');
let gameResult = document.querySelector('.game__result');
let restartButton = document.querySelector('.button__restart');
let gameboard = ['', '', '',
    '', '', '',
    '', '', ''];
let hostPlayer = {
    mark: 'X',
}
let guestPlayer = {
    mark: 'O',
}
let isHostTurn = true;
let turnCounter = 0;
let gameWinner = '';

function renderGameStatus() {
    if (isHostTurn && gameWinner === '' && turnCounter < 9) {
        gameStatus.textContent = `${hostPlayer.mark} player turn!`
    } else if (!isHostTurn && gameWinner === '' && turnCounter < 9) {
        gameStatus.textContent = `${guestPlayer.mark} player turn!`
    } else if (gameWinner !== '') {
        gameStatus.textContent = `Game is over!`
    } else if (gameWinner === '' && turnCounter === 9) {
        gameStatus.textContent = `Game is over! Draw!`
    }
}

function checkForWin(board) {
    let cell = board;
    if (
        (cell[0] === 'X' && cell[1] === 'X' && cell[2] === 'X') ||
        (cell[3] === 'X' && cell[4] === 'X' && cell[5] === 'X') ||
        (cell[6] === 'X' && cell[7] === 'X' && cell[8] === 'X') ||
        (cell[0] === 'X' && cell[3] === 'X' && cell[6] === 'X') ||
        (cell[1] === 'X' && cell[4] === 'X' && cell[7] === 'X') ||
        (cell[2] === 'X' && cell[5] === 'X' && cell[8] === 'X') ||
        (cell[0] === 'X' && cell[4] === 'X' && cell[8] === 'X') ||
        (cell[2] === 'X' && cell[4] === 'X' && cell[6] === 'X')
    ) {
        gameResult.textContent = `${hostPlayer.mark} won the game!`
        gameWinner = hostPlayer;
    } else if (
        (cell[0] === 'O' && cell[1] === 'O' && cell[2] === 'O') ||
        (cell[3] === 'O' && cell[4] === 'O' && cell[5] === 'O') ||
        (cell[6] === 'O' && cell[7] === 'O' && cell[8] === 'O') ||
        (cell[0] === 'O' && cell[3] === 'O' && cell[6] === 'O') ||
        (cell[1] === 'O' && cell[4] === 'O' && cell[7] === 'O') ||
        (cell[2] === 'O' && cell[5] === 'O' && cell[8] === 'O') ||
        (cell[0] === 'O' && cell[4] === 'O' && cell[8] === 'O') ||
        (cell[2] === 'O' && cell[4] === 'O' && cell[6] === 'O')
    ) {
        gameResult.textContent = `${guestPlayer.mark} won the game!`
        gameWinner = guestPlayer;
    }
}

let cells = [...markCells];
function placeMark() {
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (isHostTurn) {
                if (cell.innerHTML !== '') {
                    return
                } else {
                    gameboard[index] = hostPlayer.mark;
                    cell.innerHTML = gameboard[index];
                    turnCounter++
                    console.log(gameboard);
                    isHostTurn = false;
                    checkForWin(gameboard);
                    renderGameStatus()
                }
            } else {
                if (cell.innerHTML !== '') {
                    return;
                } else {
                    gameboard[index] = guestPlayer.mark;
                    cell.innerHTML = gameboard[index];
                    turnCounter++
                    console.log(gameboard);
                    isHostTurn = true;
                    checkForWin(gameboard);
                    renderGameStatus()
                }
            }
        })


        cell.addEventListener('mouseenter', (e) => {
            if (e.target.innerHTML !== '') {
                return
            }
            else if (isHostTurn) {
                e.target.setAttribute('data-placeholder', hostPlayer.mark)
            } else {
                e.target.setAttribute('data-placeholder', guestPlayer.mark)
            }
        })
        cell.addEventListener('mouseleave', () => {
            cell.setAttribute('data-placeholder', '')
        })
    })

}


function playRound() {
    placeMark();
}

playRound()



/* 
TODO
✅ Смена хода
Сообщение победы
Комбинация для победы
*/
let gameboard = ['', '', '',
    '', '', '',
    '', '', ''];
let markCells = document.querySelectorAll('.cell');
let hostPlayer = {
    mark: 'X',
}
let guestPlayer = {
    mark: 'O',
}

const WIN_COMBINATIONS = [[]]
let isHostTurn = true;


let cells = [...markCells];

function placeMark() {
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (isHostTurn) {
                gameboard[index] = hostPlayer.mark;
                cell.innerHTML = gameboard[index];
                console.log(gameboard);
                isHostTurn = false
            } else {
                gameboard[index] = guestPlayer.mark;
                cell.innerHTML = gameboard[index];
                isHostTurn = true;
            }

        })
        // cell.addEventListener('mouseenter', (e) => {
        //     console.log(e.target);
        //     e.target.textContent = hostPlayer.mark;


        // })
        // cell.addEventListener('mouseleave', (e) => {
        //     if (e.target.textContent !== '') {
        //         return
        //     } else {
        //         e.target.textContent = '';
        //     }
        // })
    })
}

function guestMark() {
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            gameboard[index] = guestPlayer.mark;
            cell.innerHTML = gameboard[index];
            console.log(gameboard);
        })
    })
}

function playRound() {
    placeMark();
}

playRound()


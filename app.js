
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

const WIN_COMBINATIONS = [['X', 'X', 'X']]
let isHostTurn = true;


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
                    console.log(gameboard);
                    isHostTurn = false
                }
            } else {
                if (cell.innerHTML !== '') {
                    return;
                } else {
                    gameboard[index] = guestPlayer.mark;
                    cell.innerHTML = gameboard[index];
                    console.log(gameboard);
                    isHostTurn = true;
                }
            }

        })
        cell.addEventListener('mouseenter', (e) => {
            if (isHostTurn) {
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


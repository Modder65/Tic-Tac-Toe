//Accesses grid container and grid cell elements
let game = document.getElementById("gameBoard");
let children = game.children;
let select = document.querySelector("select");
let message = document.querySelector(".status");
//starting choice for player 1 is set to X
let choice = "X";

//Iterates over every grid cell and assigns them a numbered data attribute and click event
function clicked() {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.setAttribute("data-id", i);
        child.setAttribute("onclick", "gameBoard.updateDisplay(event)");
    }
}

//Module that stores the game boards information and functions
const gameBoard = (() => {
    let counter = 0; //variable used in tie-game outcome condition
    //array that replicates the position an X or an O is placed on the game board by correlation to the grid cells data-id attribute
    let board = [];

    //function that analyzes every possible win pattern and displays the winner of the game
    const isVictory = function (event) {
        if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
            message.textContent = "Player One Wins!";
            gameStop();
        } else if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
            message.textContent = "Player Two Wins!";
            gameStop();
        } 
    
        //counter keeps track of how many grid cells contain an X or and O. If every grid cell has an X or an O but nobody has won the game, log "Its a draw" to the console
        counter = 0;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.textContent != "") {
                counter++;
                //console.log(counter);
            }
        }
        if (counter == 9) {
            message.textContent = "It's a draw!";
            counter = 0;
        }
    }

    //this function runs every time a grid cell is clicked, displaying either an X or an O
    const updateDisplay = function (event) {
            if (choice == "X") {
                if (event.target.textContent == '') {
                    board[event.target.getAttribute("data-id")] = choice;
                    event.target.textContent = choice;
                    choice = "O";   
                    isVictory(event);
                } else {
                    // do nothing
                }
            } else if (choice == "O") {
                if (event.target.textContent == '') {
                    board[event.target.getAttribute("data-id")] = choice;
                    event.target.textContent = choice;
                    choice = "X";
                    isVictory(event);
                } else {
                    // do nothing
                }
            }
    }

    //function that clears the game board of content and re-adds the onclick event to each grid cell
    const clearDisplay = function () {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.textContent = "";
            board.pop();
        }
        clicked();
        message.textContent = ""
    }

    //function removes onclick event from every grid cell element making it impossible to make a move after a winner is declared until the board is reset
    const gameStop = function () {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.removeAttribute("onclick");
        }
    }

    return { board, updateDisplay, clearDisplay };
})();





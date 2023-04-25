//Accesses grid container and grid cell elements
let game = document.getElementById("gameBoard");
let children = game.children;
let select = document.querySelector("select");
let message = document.querySelector(".status");
//starting choice for player 1 is set to X
let currentPlayer = "X";
let currentPlayerName = "Player One";
let gamePlayers = 2;


//Iterates over every grid cell and assigns them a numbered data attribute and click event for player vs player
function clicked_player() {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.setAttribute("data-id", i);
        child.setAttribute("onclick", "gameBoard.updatePlayerDisplay(event)");
        
        // document.getElementById("myBtn").addEventListener("click", displayDate);
    }
}

//Iterates over every grid cell and assigns them a numbered data attribute and click event for player vs computer
function clicked_computer() {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.setAttribute("data-id", i);
        child.setAttribute("onclick", "gameBoard.updateComputerDisplay(event)");
    }
}



//Module that stores the game boards information and functions
const gameBoard = (() => {
    let counter = 0; //variable used in tie-game outcome condition
    //array that replicates the position an X or an O is placed on the game board by correlation to the grid cells data-id attribute
    let board = [];

    //Function that sets gamePlayers equal to 1 (player vs computer) or 2 (player vs player)
    const choosePlayer = function (num) {
        gamePlayers = num;
        document.getElementById('players_interface').style.display = "none";
        if (gamePlayers == 1 ) {
            clicked_computer();
            currentPlayer = "X";
            currentPlayerName = "Player One";
            document.getElementById("two").textContent = "Computer";
        } else {
            clicked_player();
            currentPlayer = "X";
            currentPlayerName = "Player One";
            document.getElementById("two").textContent = "Player Two";
        }
    };

    //function that causes the computer to win on its turn if it's in a position to win
    const canWin = function () {
        if (board[0] == "O" && board[1] == "O" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[3] == "O" && board[4] == "O" && board[5] == undefined) {
            document.getElementById("tile5").click();
        } else if (board[6] == "O" && board[7] == "O" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[2] == "O" && board[1] == "O" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[5] == "O" && board[4] == "O" && board[3] == undefined) {
            document.getElementById("tile3").click();
        } else if (board[8] == "O" && board[7] == "O" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[0] == "O" && board[3] == "O" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[1] == "O" && board[4] == "O" && board[7] == undefined) {
            document.getElementById("tile7").click();
        } else if (board[2] == "O" && board[5] == "O" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[6] == "O" && board[3] == "O" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[7] == "O" && board[4] == "O" && board[1] == undefined) {
            document.getElementById("tile1").click();
        } else if (board[8] == "O" && board[5] == "O" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[0] == "O" && board[4] == "O" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[8] == "O" && board[4] == "O" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[2] == "O" && board[4] == "O" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[6] == "O" && board[4] == "O" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[0] == "O" && board[2] == "O" && board[1] == undefined) {
            document.getElementById("tile1").click();
        } else if (board[3] == "O" && board[5] == "O" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[6] == "O" && board[8] == "O" && board[7] == undefined) {
            document.getElementById("tile7").click();
        } else if (board[0] == "O" && board[6] == "O" && board[3] == undefined) {
            document.getElementById("tile3").click();
        } else if (board[1] == "O" && board[7] == "O" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[2] == "O" && board[8] == "O" && board[5] == undefined) {
            document.getElementById("tile5").click();
        } else if (board[0] == "O" && board[8] == "O" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[2] == "O" && board[6] == "O" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else {
            //do nothing
            console.log("canWin");
            return false;
        }
    };

    //function that checks if the player is about to win and stops it from occuring 
    const shouldBlock = function () {
        if (board[0] == "X" && board[1] == "X" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[3] == "X" && board[4] == "X" && board[5] == undefined) {
            document.getElementById("tile5").click();
        } else if (board[6] == "X" && board[7] == "X" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[2] == "X" && board[1] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[5] == "X" && board[4] == "X" && board[3] == undefined) {
            document.getElementById("tile3").click();
        } else if (board[8] == "X" && board[7] == "X" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[0] == "X" && board[3] == "X" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[1] == "X" && board[4] == "X" && board[7] == undefined) {
            document.getElementById("tile7").click();
        } else if (board[2] == "X" && board[5] == "X" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[6] == "X" && board[3] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[7] == "X" && board[4] == "X" && board[1] == undefined) {
            document.getElementById("tile1").click();
        } else if (board[8] == "X" && board[5] == "X" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[0] == "X" && board[4] == "X" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[8] == "X" && board[4] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[2] == "X" && board[4] == "X" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[6] == "X" && board[4] == "X" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[0] == "X" && board[2] == "X" && board[1] == undefined) {
            document.getElementById("tile1").click();
        } else if (board[3] == "X" && board[5] == "X" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[6] == "X" && board[8] == "X" && board[7] == undefined) {
            document.getElementById("tile7").click();
        } else if (board[0] == "X" && board[6] == "X" && board[3] == undefined) {
            document.getElementById("tile3").click();
        } else if (board[1] == "X" && board[7] == "X" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[2] == "X" && board[8] == "X" && board[5] == undefined) {
            document.getElementById("tile5").click();
        } else if (board[0] == "X" && board[8] == "X" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[2] == "X" && board[6] == "X" && board[4] == undefined) {
            document.getElementById("tile4").click();
        } else {
            //do nothing
            return false;
        }
    };

    //function that allows the computer to make a random move if its not in a position to win itself or stop the player from winning
    const randomSelection = function () {
        if (board[4] == undefined || board[4] == null) {
            document.getElementById("tile4").click();
        } else if (board[4] != undefined) {
            let choice = Math.floor(Math.random() * 9);
            while (board[choice] != undefined) {
                choice = Math.floor(Math.random() * 9);
            }
            document.getElementById("tile"+choice).click();
        } else {
            // do nothing
        }
    };

    //function that analyzes every possible win pattern and displays the winner of the game
    const isVictory = function () {
        if (board[0] == currentPlayer && board[4] == currentPlayer && board[8] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[2] == currentPlayer && board[4] == currentPlayer && board[6] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[0] == currentPlayer && board[1] == currentPlayer && board[2] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[3] == currentPlayer && board[4] == currentPlayer && board[5] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[6] == currentPlayer && board[7] == currentPlayer && board[8] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[0] == currentPlayer && board[3] == currentPlayer && board[6] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[1] == currentPlayer && board[4] == currentPlayer && board[7] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[2] == currentPlayer && board[5] == currentPlayer && board[8] == currentPlayer) {
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } 
        
        //counter keeps track of how many grid cells contain an X or and O. If every grid cell has an X or an O but nobody has won the game, log "Its a draw" to the console
        counter = 0;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.textContent != "") {
                counter++;
            }
        }

        if (counter == 9) {
            message.textContent = "It's a draw!";
            counter = 0;
        }

        if (gamePlayers == 1) {
            if (currentPlayer == "X" && currentPlayerName == "Player One") {
                currentPlayer = "O";
                currentPlayerName = "Computer"
            } else {
                currentPlayer = "X";
                currentPlayerName = "Player One";
            }
        } else if (gamePlayers == 2) {
            if (currentPlayer == "X" && currentPlayerName == "Player One") {
                currentPlayer = "O";
                currentPlayerName = "Player Two"
            } else {
                currentPlayer = "X";
                currentPlayerName = "Player One";
            }
        }
    };

    //this function runs every time a grid cell is clicked, displaying either an X or an O (only runs when player vs player is chosen)
    const updatePlayerDisplay = function (event) {
            if (currentPlayer == "X") {
                if (event.target.textContent == '') {
                    board[event.target.getAttribute("data-id")] = currentPlayer;
                    event.target.textContent = currentPlayer;
                    isVictory();
                } else {
                    // do nothing
                }
            } else if (currentPlayer == "O") {
                if (event.target.textContent == '') {
                    board[event.target.getAttribute("data-id")] = currentPlayer;
                    event.target.textContent = currentPlayer;
                    isVictory();
                } else {
                    // do nothing
                }
            }
    };

    //this function runs every time a grid cell is clicked, displaying either an X or an O (only runs when player vs computer is chosen)
    const updateComputerDisplay = function (event) {
        if (currentPlayer == "X") {
            if (board[event.target.getAttribute("data-id")] == undefined) {
                board[event.target.getAttribute("data-id")] = currentPlayer;
                event.target.textContent = currentPlayer;
                isVictory();
                    if (canWin() === false) {
                        if (shouldBlock() === false) {
                            randomSelection();
                        } else {
                            // do nothing
                        }
                    } else {
                        // do nothing
                    }
            } else {
                // do nothing
            }
        } else if (currentPlayer == "O") {
            board[event.target.getAttribute("data-id")] = currentPlayer;
            event.target.textContent = currentPlayer;
            isVictory();
        } 
    };

    //function that clears the game board of content and re-adds the onclick any to each grid cell
    const clearDisplay = function () {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.textContent = "";
            board.pop();
        }
        message.textContent = "";
        document.getElementById('players_interface').style.display = "flex";
    };

    //function removes onclick event from every grid cell element making it impossible to make a move after a winner is declared until the board is reset
    const gameStop = function () {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.removeAttribute("onclick");
        }
    };

    return { board, updatePlayerDisplay, updateComputerDisplay, clearDisplay, choosePlayer };
})();

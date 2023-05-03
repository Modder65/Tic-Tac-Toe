let container = document.getElementById('container');
//Accesses grid container and grid cell elements
let game = document.getElementById("gameBoard");
let children = game.children;
let select = document.querySelector("select");
let message = document.querySelector(".status");
//starting choice for player 1 is set to X and name is set to Player One
let currentPlayer = "X";
let currentPlayerName = "Player One";
//gamePlayers tracks whether the player chose to player against another player (gamePlayers = 2) or play against the computer (gamePlayers = 1)
let gamePlayers = 2;
//variable used later in updateComputerDisplay function that increments by 1 whenever an X is placed
//on the board by the player. It's then used to only allow the computer functions to run as long as
//its value is less than 5. (in a draw game against the computer there will always be 5 X's on the board
// this prevents the randomChoice function from running infinitely when the game is declared as a draw)
let moveCounter = 0;


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

//Removes the background-color styled on the grid-squares after the reset button adds it, and Adds green color-coding to the 3 squares that won the game
function victoryColor(num1, num2, num3) {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.style.backgroundColor = "";
    }
    document.getElementById("tile"+num1).classList.add("colorDisplay"); 
    document.getElementById("tile"+num2).classList.add("colorDisplay"); 
    document.getElementById("tile"+num3).classList.add("colorDisplay"); 
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
            document.getElementById("players").style.display = "flex";
            game.style.display = "grid";
            document.getElementById("resetBtn").style.display = "flex";
        } else {
            clicked_player();
            currentPlayer = "X";
            currentPlayerName = "Player One";
            document.getElementById("two").textContent = "Player Two";
            document.getElementById("players").style.display = "flex";
            game.style.display = "grid";
            document.getElementById("resetBtn").style.display = "flex";
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
        if (board[4] == undefined) {
            document.getElementById("tile4").click();
        } else if (board[4] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[0] == "X" && board[8] == "X" && board[3] == undefined) {
            document.getElementById("tile3").click();
        } else if (board[2] == "X" && board[6] == "X" && board[3] == undefined) {
            document.getElementById("tile3").click();
        } else if (board[2] == "X" && board[3] == "X" && board[7] == "X" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[2] == "X" && board[3] == "X" && board[1] == undefined) {
            document.getElementById("tile1").click();
        } else if (board[0] == "X" && board[5] == "X" && board[7] == "X" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[0] == "X" && board[5] == "X" && board[1] == undefined) {
            document.getElementById("tile1").click();
        } else if (board[6] == "X" && board[5] == "X" && board[1] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[6] == "X" && board[5] == "X" && board[7] == undefined) {
            document.getElementById("tile7").click();
        } else if (board[8] == "X" && board[3] == "X" && board[1] == "X" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[8] == "X" && board[3] == "X" && board[7] == undefined) {
            document.getElementById("tile7").click();
        } else if (board[0] == "X" && board[7] == "X" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[2] == "X" && board[7] == "X" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[1] == "X" && board[6] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[1] == "X" && board[8] == "X" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else if (board[3] == "X" && board[7] == "X" && board[6] == undefined) {
            document.getElementById("tile6").click();
        } else if (board[5] == "X" && board[7] == "X" && board[8] == undefined) {
            document.getElementById("tile8").click();
        } else if (board[1] == "X" && board[3] == "X" && board[0] == undefined) {
            document.getElementById("tile0").click();
        } else if (board[1] == "X" && board[5] == "X" && board[2] == undefined) {
            document.getElementById("tile2").click();
        } else {
            console.log("Random");
            let choice = Math.floor(Math.random() * 9);
                while (board[choice] != undefined) {
                    choice = Math.floor(Math.random() * 9);
                }
                document.getElementById("tile"+choice).click();
        }     
    };

    //function that analyzes every possible win pattern and displays the winner of the game
    const isVictory = function () {
        if (board[0] == currentPlayer && board[4] == currentPlayer && board[8] == currentPlayer) {
            victoryColor(0, 4, 8);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[2] == currentPlayer && board[4] == currentPlayer && board[6] == currentPlayer) {
            victoryColor(2, 4, 6);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[0] == currentPlayer && board[1] == currentPlayer && board[2] == currentPlayer) {
            victoryColor(0, 1, 2);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[3] == currentPlayer && board[4] == currentPlayer && board[5] == currentPlayer) {
            victoryColor(3, 4, 5);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[6] == currentPlayer && board[7] == currentPlayer && board[8] == currentPlayer) {
            victoryColor(6, 7, 8);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[0] == currentPlayer && board[3] == currentPlayer && board[6] == currentPlayer) {
            victoryColor(0, 3, 6);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[1] == currentPlayer && board[4] == currentPlayer && board[7] == currentPlayer) {
            victoryColor(1, 4, 7);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } else if (board[2] == currentPlayer && board[5] == currentPlayer && board[8] == currentPlayer) {
            victoryColor(2, 5, 8);
            message.textContent = `${currentPlayerName} Wins!`;
            gameStop();
        } 
        
        //counter keeps track of how many grid cells contain an X or and O
        counter = 0;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.textContent != "") {
                counter++;
            }
        }

        //if all the grid squares are taken by X's and O's but nobody has been declared the winner, declare a draw game
        if (counter == 9) {
            message.textContent = "It's a draw!";
            gameStop();
            container.style.pointerEvents = "auto"; //allows the user to click again so they can reset the board after the game is over
            counter = 0;
        } 

        //sets the correct value for currentPlayer and currentPlayerName depending on whether
        //the player chose to play against another player or the computer
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
                container.style.pointerEvents = "none"; //removes the users ability to click during the computers turn
                moveCounter++;
                isVictory();
                if (moveCounter < 5) {
                    setTimeout(() => {
                        if (canWin() === false) {
                            if (shouldBlock() === false) {
                                randomSelection();
                            } else {
                                // do nothing
                            }
                        } else {
                            // do nothing
                        }
                    }, 500);
                } else  {
                    // do nothing
                }
                
            } else {
                // do nothing
            }
        } else if (currentPlayer == "O") {
            if (board[event.target.getAttribute("data-id")] == undefined) {
                board[event.target.getAttribute("data-id")] = currentPlayer;
                event.target.textContent = currentPlayer;
                isVictory();
                container.style.pointerEvents = "auto"; //allows the user freedom to click again after the end of the computers turn
            } else {
                // do nothing
            }   
        } 
    };

    //function that clears the game board of content and re-adds the onclick any to each grid cell
    const clearDisplay = function () {
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.textContent = "";
            child.style.backgroundColor = "#f5f5f5";
            child.classList.remove("colorDisplay"); 
            board.pop();
            child.removeAttribute("onclick");
        }
        moveCounter = 0;
        message.textContent = "";
        document.getElementById('players_interface').style.display = "flex";
        document.getElementById("players").style.display = "none";
        game.style.display = "none";
        document.getElementById("resetBtn").style.display = "none";
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
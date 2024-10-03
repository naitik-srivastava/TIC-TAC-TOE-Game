let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let div = document.querySelector(".winprompt");
let congrats = document.querySelector(".congrats");
let count = 0;
let isWinner=false;
const boxes = document.querySelectorAll(".box");
let togg = true;
boxes.forEach(element => {
    element.addEventListener("click", (e) => {
        if (togg === true) {
            console.log("trying to print X");
            element.innerText = "X";
            element.style.color="#F9DB6D";
            togg = false;
            

        }// player x
        else {
            console.log("trying to print O");
            element.innerText = "O";
            togg = true;
        }//player O
        count++;
        element.disabled = true;
        checkpattern();
        checkDraw();
    });


});

const checkpattern = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                div.classList.remove("hide");
                congrats.innerText = congrats.innerText + ` ${pos2}`;
                boxes.forEach(b => {
                    b.disabled = true;
                })
                isWinner=true;
            }
        }



    }
}
// Check for a draw
const checkDraw = () => {
    if (count === 9 && !isWinner) {
        div.classList.remove("hide");
        document.querySelector(".winner").innerText = "It's a Draw!";
        document.querySelector(".winner").classList.add("y"); 
        document.querySelector(".winner").classList.remove("winner");
        congrats.innerText = "It's a Draw! No winner this time.";
    }
}


let newgame = document.querySelector(".newgame");
newgame.addEventListener("click", () => {
    window.location.reload();

})
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    window.location.reload();

})


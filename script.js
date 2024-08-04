let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('#reset')
let startNew = document.querySelector('.new-game');
let showmsg = document.querySelector('.winer');

let playerO = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]

]


boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        if (playerO) {
            box.innerText = "O";
            box.style.background = "green"
        }
        else {
            box.innerText = "X";
            box.style.background = "red"

        }
        box.disabled = true;
        playerO = !playerO;
        checkWinner();

    })

})

const checkWinner = () => {
    for (pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 == pos2 && pos2 == pos3) {
                //   alert(`Winner is ${pos1}`);
                //   emptyBox();
                showWinner(pos1);
                disabledBoxes();
            }
            
        }
    }
    checkDraw();

}

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const eabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=''
        showmsg.style.display = "none";
        box.style.background = "#ffff";

    }
}

const showWinner  =  (winner)=>{
    showmsg.style.display = "block";
    showmsg.innerText = `Winner is ${winner}`;

}

const checkDraw = () => {
    const allFilled = [...boxes].every(box => box.innerText !== '');
    if (allFilled) {
        showmsg.style.display = "block";
        showmsg.innerText = "No winner found";
    }
};


let resetBox = () => {
    playerO = true;
    eabledBoxes();
}

startNew.addEventListener("click",resetBox);
reset.addEventListener("click",resetBox);
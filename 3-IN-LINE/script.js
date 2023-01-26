const squares = document.querySelectorAll(".square");
let playerSymbol = "x";



for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click' , (e)=>{
        e.target.textContent = playerSymbol;
        playerSymbol = playerSymbol === "x" ? "o" : "x";

        let btnReset = document.getElementById("reset");
        btnReset.addEventListener("click" , reset)
    })
}

function reset() {
    location.reload();
}
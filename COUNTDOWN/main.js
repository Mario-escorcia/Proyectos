const inputHtml = document.getElementById("input");
const btn = document.getElementById("btn");
const btnRestart = document.getElementById("restart");
const spanCounter = document.getElementById("spnCount")

const countDown =  ()=>{
    setInterval(()=>{
        if (inputHtml.value > 0) {
            inputHtml.value--
            spanCounter.innerText = inputHtml.value
            inputHtml.style.display = "none"
            btn.style.display = "none"
        }

        if(inputHtml.value == 0){
            spanCounter.innerText = "Counter finished"
            inputHtml.style.display = "block"
            btn.style.display = "inline-block"
            setTimeout(reset , 2000)
        }

    }, 1000)   
}

function reset() {
    location.reload()
}

btn.addEventListener("click" , ()=>{ countDown()})

btnRestart.addEventListener("click" , reset)

document.addEventListener("keydown" , (e)=>{
    if (e.keyCode == 13) {
        countDown()
    }
})
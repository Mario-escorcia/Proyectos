const inputResult = document.getElementById("result");
const btnValues = document.querySelectorAll("button");

function reset() {
   inputResult.value = ""
}



btnValues.forEach(
   (element)=>{
      element.addEventListener("click" , ()=>{
         inputResult.value += element.value;

         if (element.id === "equal--btn") {
            inputResult.value = eval(inputResult.value)
         }

         if (element.id === "reset") {
            reset()
         }
      })
   }
)

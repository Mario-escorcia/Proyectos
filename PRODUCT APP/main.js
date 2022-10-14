// obtención de elementos html

const form = document.querySelector(".form");
const msgCont = document.querySelector(".msg--add-rm");
const inputProducto = document.getElementById("inp-prod");
const inputmarca = document.getElementById("inp-mrc");
const inputPrecio = document.getElementById("inp-prc");
const infoProducto = document.querySelector(".product--inf-cont");
const containerList = document.querySelector(".list--cont");


// creo la clase que llevará los productos

// `<div class="product--inf">
//             <p> <b>Producto</b> : ${this.nombre} <br>
//                 <b>Macrca</b> : ${this.marca} <br>
//                 <b>Precio</b> : ${this.precio}
//              </p>
//              <button id="delete--product">Eliminar</button>
//            </div>`
class Producto{
    constructor(nombre,marca,precio){
        this.nombre = nombre,
        this.marca = marca,
        this.precio = precio
        this.mostrar = function () {
             const div = document.createElement("div");
             div.classList.add("product--inf")
             infoProducto.appendChild(div);
             const htmlCode = `<p> <b>Producto</b> : ${this.nombre} <br>
                              <b>Macrca</b> : ${this.marca} <br>
                              <b>Precio</b> : ${this.precio}
                              </p>
                                <button id ="delete--product" name="delete">Eliminar</button>` ;
             div.innerHTML = htmlCode ;
            };
        
            this.borrar = function (elemento) {
                if (elemento.name === "delete") {
                    elemento.parentElement.remove()
                    // console.log(elemento.parentElement.parentElement)
                }
            }
        }
    }


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let nuevoProducto = new Producto(inputProducto.value,inputmarca.value,inputPrecio.value);
    nuevoProducto.mostrar();
        containerList.addEventListener("click",(e)=>{
            const borrar = new Producto();
            borrar.borrar(e.target)
            

        })
    })





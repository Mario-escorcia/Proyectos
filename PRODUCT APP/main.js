// obtención de elementos html

const form = document.querySelector(".form");
const msgCont = document.querySelector(".msg--add-rm");
const inputProducto = document.getElementById("inp-prod");
const inputmarca = document.getElementById("inp-mrc");
const inputPrecio = document.getElementById("inp-prc");
const infoProducto = document.querySelector(".product--inf-cont");
const containerList = document.querySelector(".list--cont");



// creo la clase que llevará los productos

class Producto{
    constructor(nombre,marca,precio){
        this.nombre = nombre,
        this.marca = marca,
        this.precio = precio
        this.msg = function (mensaje,background) {

            msgCont.innerHTML = `<p class="p--msg">${mensaje}</p>`;
            msgCont.style.backgroundColor = background;
            setTimeout(()=>{
                msgCont.innerHTML = `<p class="p--msg"></p>`;
                msgCont.style.backgroundColor= "transparent";
            },2500)


        }
        this.mostrar = function () {
             const div = document.createElement("div");
             div.classList.add("product--inf")
             infoProducto.appendChild(div);
             const htmlCode = `<p> <b>Producto</b> : ${this.nombre} |
                              <b>Macrca</b> : ${this.marca} <br>
                              <b>Precio</b> : ${this.precio}
                              </p>
                                <button id ="delete--product" name="delete">Eliminar</button>` ;
             div.innerHTML = htmlCode ;             
            };
        
            this.borrar = function (elemento) {
                if (elemento.name === "delete") {
                    elemento.parentElement.remove()
                }
            }
        }
    }


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let nuevoProducto = new Producto(inputProducto.value,inputmarca.value,inputPrecio.value);
    nuevoProducto.mostrar();
    nuevoProducto.msg("Producto agregado con exito","#3ccf79");

        containerList.addEventListener("click",(e)=>{
            const borrar = new Producto();
            borrar.borrar(e.target)
            borrar.msg("producto eliminado con exito","#ff3c00")
            

        })
})





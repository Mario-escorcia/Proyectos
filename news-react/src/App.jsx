import './App.css';
import { Nav } from "./nav.component/Nav";

function App() {
  // const key = "aa2ce5999c8c4e4ba63a7b32f9a3eb02"
  // const api = `https://newsapi.org/v2/everything?q=tech&apiKey=${key}`;
  // fetch(api)
  // .then((res) =>{ return res.json()})
  // .then((data)=>{return console.log(data)})
  return <div>
      <Nav></Nav>
      <p className='p--header'>Selecciona una categoria la categoria de noticias que quieres ver.</p>
      <select id="" >
        <option value="default">Selecciona una categoria</option>
        <option value="tech">Tecnologia</option>
        <option value="science">Ciencia</option>
        <option value="bussines">Negocios</option>
        <option value="space">Espacio</option>
        <option value="health">Salud</option>
        <option value="music">Musica</option>
        <option value="sports">Deportes</option>
      </select>
      <div className="news-cont">
        <div className="news">
          <h3 className="news-title">
            titulo de la noticia
          </h3>
          <p className="news-dec">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dolores doloremque libero vel necessitatibus quisquam ea. Quibusdam magnam sint debitis.
          </p>
          <p className="news-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse ipsa veritatis. Eos aut hic facilis at ea consequatur odit ratione, esse doloremque cumque dolorem assumenda laudantium sequi repellat neque? Quasi a, consequatur praesentium saepe natus vero atque autem, facere minima quaerat totam cumque omnis accusamus hic earum quae voluptates officia? Asperiores voluptas distinctio iusto, atque impedit non earum odio laudantium aspernatur iure magni qui, adipisci ullam totam ea tempore, sapiente mollitia repellendus dolor dicta. Accusamus deserunt accusantium illum quis explicabo natus facere nihil distinctio, facilis inventore molestias ab repudiandae, dicta reprehenderit laborum! Excepturi maiores qui neque mollitia officia. Doloribus hic voluptatum saepe animi amet reiciendis repellat corrupti deserunt blanditiis molestias quasi facere architecto cupiditate eaque, cumque eveniet vero placeat. Ipsam voluptatum aspernatur velit sunt at! Dolore minus ad molestiae nostrum exercitationem! Perspiciatis voluptas, animi alias quo soluta eligendi consequuntur, vero sequi nostrum nulla expedita dolore, delectus quidem autem quos quisquam! Ut ab animi neque debitis! Illum, cum, magni aut ducimus dolorum mollitia maiores facere dolorem blanditiis eaque sequi deleniti? Eveniet maxime cumque quam magnam possimus unde laboriosam itaque voluptates molestiae dolorem, qui deserunt magni? Maxime culpa, beatae unde vitae ea perferendis ratione eius, ut dignissimos animi quos. Quos, consectetur?</p>
          <span className="news-author">
            Lorem ipsum dolor sit amet.
          </span>
          <span className="news-date">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </span>
          <a href="#" className='news-link'>link a la noticia</a>
          <img src="https://d1ih8jugeo2m5m.cloudfront.net/2022/04/elementos-en-los-tipos-de-paginas-web-768x512.jpg" alt="" srcset="" />
        </div>

      </div>
  </div>

}




export default App;

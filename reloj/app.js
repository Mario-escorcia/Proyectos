const hora = document.querySelector("h1");
const fecha = document.querySelector("p");

setInterval(()=>{
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let DD = date.getDay();
        let MM = date.getMonth();
        let AA = date.getFullYear();
    
        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;

        DD = DD < 10 ? `0${DD}` : DD;
        MM = MM < 10 ? `0${MM}` : MM;
        AA = AA < 10 ? `0${AA}` : AA;        
        

        let hourResult = `${hh}:${mm}:${ss}`;
        let dateResult = `${DD}/${MM}/${AA}`;
        hora.innerText = hourResult;
        fecha.innerText = dateResult;
    },1000)


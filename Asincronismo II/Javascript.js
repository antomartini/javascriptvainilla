var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


const tabla = document.getElementById('tabla');


let index = 0;

const inter = (tiempo) => {
            setInterval( () => {   
        if (index < meses.length) {
            var tr = document.createElement('tr')
            
            tabla.appendChild(tr)
            var td = document.createElement('td')
          
            var td2 = document.createElement('td')
            
            tr.appendChild(td)
            tr.appendChild(td2)
            
            td.innerHTML = meses[index]
            td2.innerHTML = diasDelMes[index]
            index++
         } else return
    }
    , tiempo)
    
}



 
const tabla = document.querySelector('table');
const tbody = document.querySelector('tbody');
const isDOM = el => el instanceof Element

const process = async() => {
    const data = await fetch('http://localhost:3000/administrador/alumnos');

    const { result } = await data.json();

    console.log(result);

    return result;
};

process().then((resultados) => {
    
    resultados.forEach((resultado, index) => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        td.id = `t${ index }`;
        const t1 =  document.querySelector('#t1');
        
        td.append( resultado.id );
        
        if( isDOM(t1) ) {

            td.append( resultado.dni );
        }

        tr.append(td);

        tbody.append(tr);
    });

});
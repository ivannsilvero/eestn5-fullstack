const process = async() => {
    const data = await fetch('http://localhost:3000/administrador/notas');

    const { result } = await data.json();

    console.log(result);
    return result;
};


process().then((resultados) => {

    const tbody = document.querySelector('tbody');

    resultados.forEach(({ notas_id, post, fecha, nombre, cargo }, index) => {

        let tdID = document.createElement('td');
        let tdPOST = document.createElement('td');
        let tdTIMESTAMP = document.createElement('td');
        let tdNOMBRE = document.createElement('td');
        let tdCARGO = document.createElement('td');

        tdID.innerHTML = notas_id;

        tdPOST.innerHTML = post;

        tdTIMESTAMP.innerHTML = fecha.toString().replace(new RegExp(/([TZ])|(\....)/, 'g'), ' ');

        tdNOMBRE.innerHTML = nombre;
        
        tdCARGO.innerHTML = cargo;
        
        tbody.appendChild(tdID);
    
        tbody.appendChild(tdPOST);

        tbody.appendChild(tdTIMESTAMP);
        
        tbody.appendChild(tdNOMBRE);

        tbody.appendChild(tdCARGO);

        tbody.appendChild(document.createElement('tr'));

    });

});
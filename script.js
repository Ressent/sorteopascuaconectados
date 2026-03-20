// script.js - Lógica para la página del sorteo estructural
document.addEventListener('DOMContentLoaded', function() {
    
    // Base de datos de vendedores en lista
    const vendedores = [
        { nombre: 'Tiziano', telefono: '5492625671342', rango: 'del 181 al 210', disponible: true },
        { nombre: 'Nahir', telefono: '5492625527132', rango: 'del 1 al 30', disponible: true },
        { nombre: 'Lore', telefono: '5492625550023', rango: 'del 481 al 510', disponible: false },
        { nombre: 'Agustina', telefono: '5492625418630', rango: 'del 361 al 390', disponible: true },
        { nombre: 'Ruth', telefono: '5492625550024', rango: 'del 451 al 480', disponible: false },
        { nombre: 'Fede', telefono: '5492625417904', rango: 'del 301 al 330', disponible: true },
        { nombre: 'Thiago', telefono: '5492625592471', rango: 'del 91 al 120', disponible: true },
        { nombre: 'Luisina', telefono: '5492625636388', rango: 'del 241 al 270', disponible: false },
        { nombre: 'Mia', telefono: '5492625430247', rango: 'del 131 al 180', disponible: true },
        { nombre: 'Nacho', telefono: '5492625647809', rango: 'del 121 al 150', disponible: true },
        { nombre: 'Guada', telefono: '5492625465271', rango: 'del 271 al 300', disponible: true },
        { nombre: 'Maximo', telefono: '5492625438814', rango: 'del 421 al 450', disponible: true },
        { nombre: 'Sofi', telefono: '5492625433213', rango: 'del 61 al 90', disponible: true },
        { nombre: 'Aaron', telefono: '5492625675260', rango: 'del 391 al 420', disponible: true },
        { nombre: 'Seba', telefono: '5492625599206', rango: 'del 511 al 540', disponible: true },
        { nombre: 'Bauty', telefono: '5492625407934', rango: 'del 541 al 570', disponible: true },
        { nombre: 'Adrian', telefono: '5492625462371', rango: 'del 571 al 600', disponible: true },
    ];

    const mensajeCompra = "Hola, Quiero comprar un numero para el sorteo de pascuas.";
    const contenedor = document.getElementById('lista-vendedores');

    if (contenedor) {
        vendedores.forEach(v => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';

            const nombreDiv = document.createElement('div');
            nombreDiv.className = 'nombre-vendedor';
            nombreDiv.innerHTML = `${v.nombre} <i class="fas fa-id-badge"></i>`;

            const rangoDiv = document.createElement('div');
            rangoDiv.className = 'numeros-disponibles';
            rangoDiv.innerHTML = `<i class="fas fa-ticket-alt"></i> Números disponibles ${v.rango}`;

            const estadoSpan = document.createElement('span');
            estadoSpan.className = `estado ${v.disponible ? 'disponible-verde' : 'agotado-rojo'}`;
            estadoSpan.innerHTML = v.disponible ? '✅ ¡Números disponibles!' : '❌ Sin disponibles';

            const boton = document.createElement('a');
            boton.className = 'btn-wsp';
            const url = `https://wa.me/${v.telefono}?text=${encodeURIComponent(mensajeCompra)}`;
            boton.href = url;
            boton.target = '_blank';
            boton.innerHTML = `<i class="fab fa-whatsapp"></i> Comprar número <i class="fas fa-arrow-right"></i>`;

            tarjeta.appendChild(nombreDiv);
            tarjeta.appendChild(rangoDiv);
            tarjeta.appendChild(estadoSpan);
            tarjeta.appendChild(boton);

            if (!v.disponible) {
                const sinStockMsg = document.createElement('p');
                sinStockMsg.style.fontSize = '0.75rem';
                sinStockMsg.style.color = '#9e3b3b';
                sinStockMsg.style.marginTop = '5px';
                sinStockMsg.innerHTML = '<i class="fas fa-info-circle"></i> Podés consultar si hay cancelaciones';
                tarjeta.appendChild(sinStockMsg);
            }

            contenedor.appendChild(tarjeta);
        });
    }
});
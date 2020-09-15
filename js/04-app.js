const abrirBn = document.querySelector('#abrir-pantalla-completa');
const salirBn = document.querySelector('#salir-pantalla-completa');


salirBn.addEventListener('click', cerrarPantallaCompleta);
abrirBn.addEventListener('click', pantallaCompleta);


function pantallaCompleta(){document.documentElement.requestFullscreen();}
function cerrarPantallaCompleta(){document.exitFullscreen();}
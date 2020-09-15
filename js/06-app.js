const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'escuchando...';
    
    };

    
    recognition.onspeechend = function(){
        salida.textContent = 'Se dejó de grabar';
        recognition.stop();
    };
    
    recognition.onresult = function(e){
        console.log(e.results[0][0])
        salida.textContent = 'escuchando...';
    const {confidence, transcript} = e.results[0][0];

    const speech = document.createElement('p');
    speech.innerHTML =  `grabado: ${transcript} `;

    const seguridad = document.createElement('p');
    seguridad.innerHTML =  `seguridad ${parseInt(confidence * 100)} `;

    salida.appendChild(speech);
    salida.appendChild(seguridad);

    }
}
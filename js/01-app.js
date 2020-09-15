const notificar = document.querySelector('#notificar');
notificar.addEventListener('click',()=>{
    Notification
    .requestPermission()
    .then( resultado =>{
        console.log('El resultado es ', resultado)
    })
});

const verNtcn = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click',()=>{
    if (Notification.permission === 'granted'){
        const notificacion =  new Notification('Esta es la notificacion', 
        {icon: 'img/ccj.png',
    body: 'Channel está cerca de ti'});
    notificacion.onclick = function() {
        window.open('https://www.google.com.mx')
    }
    }
});

document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar');
    }else{
        console.log('pausa');
    }
})
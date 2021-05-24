const audio = document.getElementById('audio');

addEventListener('visibilitychange', (e)=>{
    document.visibilityState==="visible" ?  audio.play() : audio.pause();
});
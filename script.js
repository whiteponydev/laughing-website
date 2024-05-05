const enter = document.getElementById('enter');
const box = document.getElementById('box');

enter.addEventListener('click', () => {
    enter.remove();

    setInterval(checkTime, 60000);

    function checkTime() {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        console.log(d);
        console.log(h);
        console.log(m);

        if (h === 15 && m === 44){
            const laugh = document.createElement('audio');
            laugh.src = 'sounds/laughing.wav';
            laugh.type = 'audio/wav';
            box.appendChild(laugh);
            laugh.play();
        }    
    }
})
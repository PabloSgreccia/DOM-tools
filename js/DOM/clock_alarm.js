const d = document;

export function setClock(clock, startClockBtn, stopClockBtn){
    let clockTempo;
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(startClockBtn)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        } else if(e.target.matches(stopClockBtn)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(startClockBtn).disabled = false;
        }
    });
}

export function setAlarm(sound, startSoundBtn, stopSoundBtn){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(startSoundBtn)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 0);

            e.target.disabled = true;
        } else if(e.target.matches(stopSoundBtn)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(startSoundBtn).disabled = false;
        }
    });
}


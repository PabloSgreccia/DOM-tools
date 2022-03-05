import hamburgerMenu from "./DOM/hamurger_menu.js";
import { setClock, setAlarm } from "./DOM/clock_alarm.js";
import { shortcuts, moveBall } from "./DOM/keyboard_events.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    setClock("#clock", "#start-clock-btn", '#stop-clock-btn');
    setAlarm("assets/car-alarm.mp3", "#start-alarm-btn", '#stop-alarm-btn');
});


d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".stage", ".ball")
})
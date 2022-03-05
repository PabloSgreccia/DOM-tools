import hamburgerMenu from "./DOM/burger_menu.js";
import {setClock, setAlarm} from "./DOM/clock_alarm.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    setClock("#clock", "#start-clock-btn", '#stop-clock-btn');
    setAlarm("assets/car-alarm.mp3", "#start-alarm-btn", '#stop-alarm-btn');
});
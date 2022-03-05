import hamburgerMenu from "./DOM/hamurger_menu.js";
import { setClock, setAlarm } from "./DOM/clock_alarm.js";
import { shortcuts, moveBall } from "./DOM/keyboard_events.js";
import countdown from "./DOM/countdown.js";
import { scrollTopButton } from "./DOM/scroll_top_button.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    setClock("#clock", "#start-clock-btn", '#stop-clock-btn');
    setAlarm("assets/car-alarm.mp3", "#start-alarm-btn", '#stop-alarm-btn');

    const bDay = new Date("jun 23, 2022");
    const month = bDay.getMonth() + 1;
    const day = bDay.getDate();
    const stringMonth = bDay.toLocaleString('default', { month: 'short' });
    let dayToday = new Date();
    let year = dayToday.getFullYear();
    if((dayToday.getMonth() + 1) > month){
        year = dayToday.getFullYear() + 1;
    } else if (((dayToday.getMonth() + 1) === month) && (dayToday.getDate() > day)){
        year = dayToday.getFullYear() + 1;
    } 
    countdown("countdown", `${stringMonth} ${day}, ${year} 00:00:00`, "Happy Birthday! 🤗");

    scrollTopButton("scroll-top-btn", 500);
});


d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".stage", ".ball")
})
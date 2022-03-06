import hamburgerMenu from "./DOM/hamurger_menu.js";
import { setClock, setAlarm } from "./DOM/clock_alarm.js";
import { shortcuts, moveBall } from "./DOM/keyboard_events.js";
import countdown from "./DOM/countdown.js";
import { scrollTopButton } from "./DOM/scroll_top_button.js";
import darkMode from "./DOM/dark_mode_btn.js";
import responsiveContent from "./DOM/responsive.js";
import responsiveTester from "./DOM/responsive_tester.js";
import userDeviceInfo from "./DOM/device_detector.js";
import detectConnection from "./DOM/connection_detector.js";
import returnWebcam from "./DOM/webcam.js";
import returnGeolocation from "./DOM/geolocation.js";


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
    responsiveContent(
        "video", 
        "(min-width: 1100px)", 
        `<a href="https://www.youtube.com/watch?v=jNQXAC9IVRw" target="_blank" rel="noopener">Watch Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveContent(
        "map", 
        "(min-width: 1100px)", 
        `<a href="https://goo.gl/maps/3Mt6UkeogHcRs6PPA" target="_blank" rel="noopener">Watch Map</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13424.58365178562!2d-117.149046!3d32.735316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5df0f4372635e247!2sZool%C3%B3gico%20de%20San%20Diego!5e0!3m2!1ses-419!2sar!4v1646514670196!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester("#responsive-tester-form");
    userDeviceInfo("#user-device");
    detectConnection();
    returnWebcam("#webcam-video");
    returnGeolocation("#geolocation");
});


d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".stage", ".ball")
})

darkMode("#dark-mode-btn", "dark-mode", "dark-data");

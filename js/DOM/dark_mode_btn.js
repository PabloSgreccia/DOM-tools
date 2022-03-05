const d = document;
const ls = localStorage;

export default function darkMode(darkModeBtn, darkClass, darkAttribute){
    const $darkButton = d.querySelector(darkModeBtn);
    const $selectors = d.querySelectorAll(`[${darkAttribute}]`);

    let moon = "🌙";
    let sun = "☀️";

    d.addEventListener("DOMContentLoaded", (e) => {
        if(ls.getItem("mode") === null) ls.setItem("mode", "light")
        if(ls.getItem("mode") === "light") lightMode();
        if(ls.getItem("mode") === "dark") darkMode();
    })

    d.addEventListener("click", (e) => {
        if(e.target.matches(darkModeBtn)){
            if($darkButton.textContent === moon){
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    const lightMode = () => {
        $darkButton.textContent = moon;
        $selectors.forEach(el => el.classList.remove(darkClass));
        ls.setItem("mode", "light")
    }
    
    const darkMode = () => {
        $darkButton.textContent = sun;
        $selectors.forEach(el => el.classList.add(darkClass));
        ls.setItem("mode", "dark");
    }


}
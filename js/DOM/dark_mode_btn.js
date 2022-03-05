const d = document;

export default function darkMode(darkModeBtn, darkClass, darkAttribute){
    d.addEventListener("click", (e) => {
        const $darkButton = d.querySelector(darkModeBtn);
        const $selectors = d.querySelectorAll(`[${darkAttribute}]`);

        let moon = "🌙";
        let sun = "☀️";

        if(e.target.matches(darkModeBtn)){
            if($darkButton.textContent === moon){
                $darkButton.textContent = sun;
                $selectors.forEach(el => el.classList.add(darkClass));
            } else {
                $darkButton.textContent = moon;
                $selectors.forEach(el => el.classList.remove(darkClass));
            }
        }

    });
}
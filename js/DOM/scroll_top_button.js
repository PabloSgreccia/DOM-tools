const d = document;
const w = window;

export function scrollTopButton(btnId, yAxis){
    let scrollTopButton = d.getElementById(btnId);

    w.addEventListener("scroll", (e) => {
        let scrollPosition = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollPosition >= yAxis){
            scrollTopButton.classList.remove("hidden");
        } else {
            scrollTopButton.classList.add("hidden");
        }
    })

    d.addEventListener("click", (e) => {
        if(e.target.matches(`#${btnId}`)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        }
    });
}
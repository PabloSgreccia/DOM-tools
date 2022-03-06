const d = document;
const n = navigator;
const w = window;

export default function detectConnection(){

    const isOnLine = () => {
        const $div = d.createElement("div");

        console.log(n.onLine);
        if(n.onLine){
            $div.textContent = "Reestablished Connection"
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Lost Connection"
            $div.classList.remove("online");
            $div.classList.add("offline");
        }

        let $body = d.querySelector("body");
        $body.insertAdjacentElement("afterbegin", $div)

        setTimeout(() => {
            d.body.removeChild($div)
        }, 2500);
    }

    w.addEventListener("online", (e) => isOnLine())
    w.addEventListener("offline", (e) => isOnLine())
}
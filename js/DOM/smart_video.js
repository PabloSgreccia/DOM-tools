const d = document;
const w = window;

export default function smartVideo(){

    const $video = d.querySelectorAll("video[data-smart-video]");

    const callBack = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.play();
            } else {
                entry.target.pause();
            }
            
            w.addEventListener("visibilitychange", (e) => {
                ((d.visibilityState === "visible") && (entry.isIntersecting)) ? entry.target.play() : entry.target.pause();
            })
        });

    }

    const observer = new IntersectionObserver(callBack, {
        //root,
        // rootMargin: "-250px",
        threshold: 0.3,
    });

    $video.forEach(el => {
        observer.observe(el)
    });

}
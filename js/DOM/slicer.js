const d = document;

export default function slicerEffects(slicerSelector, btnBefore, btnNext){
    let $slicersSelector = d.querySelectorAll(slicerSelector);
    let $btnBefore = d.querySelector(btnBefore);
    let $btnNext = d.querySelector(btnNext);

    let i = 0;

    let refresh;
    function refInt() {
        if(refresh) clearInterval(refresh.interval);
        refresh = {
            interval: setInterval(() => {
                $slicersSelector[i].classList.remove("active");
                ((i + 1) > $slicersSelector.length - 1)
                    ? i = 0
                    : i++;
                $slicersSelector[i].classList.add("active");
            }, 3000),
        } 
    }

    refInt();

    d.addEventListener("click", (e)=>{

        if(e.target === $btnBefore){
            e.preventDefault();
            $slicersSelector[i].classList.remove("active");
            ((i - 1) < 0) 
                ? i = $slicersSelector.length - 1
                : i--;
            $slicersSelector[i].classList.add("active");

            refInt();
        }

        if(e.target === $btnNext){
            e.preventDefault();
            $slicersSelector[i].classList.remove("active");
            ((i + 1) > $slicersSelector.length - 1)
                ? i = 0
                : i++;
            $slicersSelector[i].classList.add("active");
        }

        refInt();

    })

}
const d = document;

export default function slicerEffects(slicerSelector, btnBefore, btnNext){
    let $slicersSelector = d.querySelectorAll(slicerSelector);
    let $btnBefore = d.querySelector(btnBefore);
    let $btnNext = d.querySelector(btnNext);

    const $references = d.createElement("div");
    $references.classList.add("slicer-refs");
    $slicersSelector.forEach(el => {
        const $reference = d.createElement("div");
        $reference.classList.add("slicer-ref");
        // $reference.textContent = "-";
        $references.appendChild($reference);
    });

    d.querySelector(".slider").appendChild($references);
    let $referencesSelector = d.querySelectorAll(".slicer-ref");
    console.log($referencesSelector);

    let i = 0;

    let refresh;
    function refInt() {
        if(refresh) clearInterval(refresh.interval);
        refresh = {
            interval: setInterval(() => {
                $slicersSelector[i].classList.remove("active");
                $referencesSelector[i].classList.remove("active");
                ((i + 1) > $slicersSelector.length - 1)
                    ? i = 0
                    : i++;
                $slicersSelector[i].classList.add("active");
                $referencesSelector[i].classList.add("active");
            }, 3000),
        } 
    }

    refInt();

    d.addEventListener("click", (e)=>{

        if(e.target === $btnBefore){
            e.preventDefault();
            $slicersSelector[i].classList.remove("active");
                $referencesSelector[i].classList.remove("active");
                ((i - 1) < 0) 
                ? i = $slicersSelector.length - 1
                : i--;
            $slicersSelector[i].classList.add("active");
            $referencesSelector[i].classList.add("active");

            refInt();
        }

        if(e.target === $btnNext){
            e.preventDefault();
            $slicersSelector[i].classList.remove("active");
                $referencesSelector[i].classList.remove("active");
                ((i + 1) > $slicersSelector.length - 1)
                ? i = 0
                : i++;
            $slicersSelector[i].classList.add("active");
            $referencesSelector[i].classList.add("active");
        }

        refInt();

    })

}
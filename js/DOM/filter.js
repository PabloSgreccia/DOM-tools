const d = document;

export default function filterImages(filterId, selector, classDisplayNone, tagMessage){
    let $filter = d.getElementById(filterId);

    $filter.addEventListener("input", (e) => {
        let $selectors = d.querySelectorAll(selector);
        $selectors.forEach(el => {
            el.textContent.toLowerCase().includes($filter.value.toLowerCase()) 
                ? el.classList.remove(classDisplayNone)
                : el.classList.add(classDisplayNone)
        });

        let $hiddenSelectors = d.querySelectorAll(`.${classDisplayNone}`);
        if($selectors.length === $hiddenSelectors.length){
            let $messageTag = d.getElementById(tagMessage);
            $messageTag.innerHTML = `<h3>There is nothing to show.</h3>`
        } else {
            let $messageTag = d.getElementById(tagMessage);
            $messageTag.innerHTML = null;
        }
    });

    d.addEventListener("keyup", (e) => {
        if(e.target.matches(filterId)){
            if(e.key === "Escape") e.target.value = "";
        }
    })
}
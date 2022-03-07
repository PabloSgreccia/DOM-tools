const d = document;

export default function formValidations(formSelector){

    const $form = d.querySelector(formSelector);
    const $inputs = $form.querySelectorAll("[required]");

    $inputs.forEach(el => {
        let $span = d.createElement("span");
        $span.id = el.id;
        $span.textContent = el.title;
        $span.classList.add("feedback-form-error", "none");
        el.insertAdjacentElement("afterend", $span);
    });

    $form.addEventListener("keyup", (e) => {
        let pattern = e.target.pattern || e.target.dataset.pattern
        let $span = $form.querySelector(`span#${e.target.id}`) 

        if(pattern){
            let regEx = new RegExp(pattern)
            regEx.test(e.target.value)
                ? $span.classList.remove("is-active")
                : $span.classList.add("is-active");
        }

        if(!pattern){
            e.target.value === ""
                ? $span.classList.add("is-active")
                : $span.classList.remove("is-active");
        }

    })

}
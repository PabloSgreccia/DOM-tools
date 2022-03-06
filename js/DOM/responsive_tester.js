const d = document;
const w = window;

export default function responsiveTester(form){

    let $form = d.querySelector(form);
    let tester;

    $form.addEventListener("submit", (e) => {
        if (e.target === $form) {
            e.preventDefault();
            tester = w.open($form.website.value, "tester", `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`);
        }
    });

    $form.addEventListener("click", (e) => {
        if (e.target === $form.close) {
            tester.close();
            $form.website.value = null;
            $form.height.value = null;
            $form.width.value = null;
        }
    });
}
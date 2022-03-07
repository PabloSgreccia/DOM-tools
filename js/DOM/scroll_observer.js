const d = document;

export default function scrollSpy(){
    // in your code you need have tags with a class called "section" and am attribute called "data-scroll-spy" 
    const $sections = d.querySelectorAll(".section[data-scroll-spy]");

    const callBack = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.add("active");
            } else{
                d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.remove("active");
            }
        });

    }

    const observer = new IntersectionObserver(callBack, {
        //root,
        // rootMargin: "-250px",
        threshold: [0.5, 0.75],
    });

    $sections.forEach((el) => observer.observe(el));

}
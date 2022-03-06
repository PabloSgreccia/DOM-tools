const d = document;

export function shortcuts(keyEvent){
    if((keyEvent.key === "a") && (keyEvent.altKey === true)){
        alert("Hi! i'm an alert.")
    }
    
    if((keyEvent.key === "p") && (keyEvent.altKey === true)){
        prompt("Hi! i'm a prompt.")
    }
    
    if((keyEvent.key === "c") && (keyEvent.altKey === true)){
        confirm("Hi! i'm a confirm.")
    }
}

let x = 0;
let y = 0;
export function moveBall(e, stage, ball){
    const $ball = d.querySelector(ball); 
    const $stage = d.querySelector(stage); 
    const $limitBall = $ball.getBoundingClientRect(); 
    const $limitStage = $stage.getBoundingClientRect(); 
    const factor = 5;


    switch (e.keyCode) {
        case 37:
            if($limitStage.left < $limitBall.left-factor) {
                e.preventDefault();
                x--
            };
            break;
        case 38:
            e.preventDefault();
            if($limitStage.top < $limitBall.top-factor) {
                e.preventDefault();
                y--
            };
            break;
        case 39:
            e.preventDefault();
            if($limitStage.right > $limitBall.right+factor) {
                e.preventDefault();
                x++
            };
            break;
        case 40:
            e.preventDefault();
            if($limitStage.bottom > $limitBall.bottom+factor) {
                e.preventDefault();
                y++
            };
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x*factor}px, ${y*factor}px)`;

}






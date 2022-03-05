const d = document;

export default function countdown(tagId, limitDate, finalMessage){
    const countdownElement = d.getElementById(tagId)
    const countDownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let dateToday = new Date().getTime();
        let dateDiff = countDownDate - dateToday; 

        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = ("0" + Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        let minutes = ("0" + Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        let seconds = ("0" + Math.floor((dateDiff % (1000 * 60)) / (1000))).slice(-2);

        countdownElement.innerHTML = `<h3>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</h3>`

        if(dateDiff < 0){
            clearInterval(countdownTempo);
            countdownElement.innerHTML = `<h3>${finalMessage}</h3>`
        }

    }, 1000);
}
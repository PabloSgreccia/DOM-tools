const d = document;

export default function giveAway(btnId, playersClass){
    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnId)){
            let winner = getWinner();
            alert(`The winner is: ${winner}`);
        }
    });

    function getWinner(){
        let $players = d.querySelectorAll(playersClass);
        let position = Math.floor(Math.random() * $players.length);
        return $players[position].textContent;
    }
}
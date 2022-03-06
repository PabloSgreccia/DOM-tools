const d = document;
const n = navigator;
const w = window;

export default function returnWebcam(videoSelector){

    let $video = d.querySelector(videoSelector);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:false})
            .then((stream) => {
                $video.srcObject = stream;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<h3>Se produjo el siguiente error: "${err}"</h3>`);
            });
    }
}
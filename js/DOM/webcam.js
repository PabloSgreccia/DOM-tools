const d = document;
const n = navigator;
const w = window;

export default function returnWebcam(videoSelector){

    let $video = d.querySelector(videoSelector);
    if(n.mediaDevices){
        if(n.mediaDevices.getUserMedia){
            n.mediaDevices.getUserMedia({video:true, audio:false})
                .then((stream) => {
                    $video.srcObject = stream;
                    $video.play();
                })
                .catch((err) => {
                    $video.insertAdjacentHTML("beforebegin", `<h3>Error: "${err}"</h3>`);
                });
        }
    } else{
        $video.insertAdjacentHTML(
            "beforebegin", 
            `<p><b>Error:</b> we can't run this feature because it is available only in secure contexts (HTTPS).</p>
            <p>For more information visit <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"><i>this link</i></a> </p>
            `);
    }

}
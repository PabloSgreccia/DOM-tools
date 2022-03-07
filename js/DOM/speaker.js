const d = document;
const w = window;

export default function speaker() {
    const
        $speakerSelect = d.getElementById("speaker-lang-select"),
        $speakerText = d.getElementById("speaker-text"),
        $speakerBtn = d.getElementById("speaker-btn"),
        speakerMessage = new SpeechSynthesisUtterance();

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e)=> {

        w.speechSynthesis.addEventListener("voiceschanged", (e)=>{
            voices = w.speechSynthesis.getVoices();
            voices.forEach(voice => {
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.lang} --> ${voice.name}`
                $speakerSelect.appendChild($option);
            });
        })

    })
    
    d.addEventListener("change", (e)=>{
        if(e.target === $speakerSelect){
            speakerMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
    })
    
    d.addEventListener("click", (e)=>{
        if(e.target === $speakerBtn){
            speakerMessage.text = $speakerText.value;
            w.speechSynthesis.speak(speakerMessage)
        }
    })

}
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) =>(voiceselect.options[i] = new Option(voice.name,i)));
    // This line of code creates options in a dropdown menu for each available voice. Each option shows the name of a voice, and its value represents the voice's position in the list of voices.
};
voiceselect.addEventListener("change",()=>{
    speech.voice = voices[voiceselect.value];
})

// EXPLANATION

// let voices = [];

// Initializes an empty array to hold the available voices.
// let voiceselect = document.querySelector("select");

// Selects the <select> element from the HTML and assigns it to the variable voiceselect.
// window.speechSynthesis.onvoiceschanged = ()=>{

// Sets an event listener that triggers when the available voices change.
// voices = window.speechSynthesis.getVoices();

// Retrieves the list of available voices and stores them in the voices array.
// speech.voice = voices[0];

// Sets the default voice for speech synthesis to the first voice in the list.
// voices.forEach((voice, i) =>(voiceselect.options[i] = new Option(voice.name,i)));

// Populates the <select> dropdown with the names of the available voices.
// };

// Ends the event listener function.
// voiceselect.addEventListener("change",()=>{

// Adds an event listener to the <select> element that triggers when the selected option changes.
// speech.voice = voices[voiceselect.value];

// Updates the voice for speech synthesis to the selected voice from the dropdown.
// })





document.querySelector("button").addEventListener("click" , ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
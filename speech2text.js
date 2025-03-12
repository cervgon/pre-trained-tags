// Get the speech recognition object
const recognition = new window.SpeechRecognition();

// Function to handle speech recognition
function handleSpeechRecognition(event) {
    // Append the recognized text to the textarea
    document.getElementById("speech-text").innerHTML += event.result;
}

// Create a button that triggers the speech recognition
const button = document.createElement("button");
button.textContent = "Listen";
button.addEventListener("click", () => {
    // Create a new SpeechRecognition object
    recognition = new window.SpeechRecognition();
    recognition.lang = "en-US";
    recognition.maxResults = 10;
    recognition.onresult = handleSpeechRecognition;
    recognition.start();
});

// Create a textarea to display the speech-to-text content
const textarea = document.createElement("textarea");
textarea.id = "speech-text";
textarea.disabled = true;

// Add the button and textarea to the page
document.body.appendChild(button);
document.body.appendChild(textarea);
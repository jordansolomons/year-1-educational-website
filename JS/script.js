// Sets variable //
var i=0,text;
// Sets text to be displayed // 
text="Welcome traveller, the galaxy awaits you. \n What shall I teach you?"

function typing() {
    if(i<text.length) { // Function loops through every letter // 
        document.getElementById("text").innerHTML += text.charAt(i); // Adds letters one by one to be displayed // 
        i++;
        setTimeout(typing,50); // Delays the function slightly to give desired effect // 
    }
}
typing() // Calls the function again // 
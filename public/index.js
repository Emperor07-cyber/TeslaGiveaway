function copyAddress() {
    // Select the text inside the paragraph
    var addressText = document.getElementById("address");
    
    // Create a temporary textarea element
    var tempInput = document.createElement("textarea");
    tempInput.value = addressText.innerText;
    
    // Append the textarea to the body
    document.body.appendChild(tempInput);
    
    // Select the text inside the textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */
    
    // Copy the selected text
    document.execCommand("copy");
    
    // Remove the temporary textarea
    document.body.removeChild(tempInput);
    
    // Provide feedback (optional)
    alert("Address copied to clipboard: " + addressText.innerText);
}

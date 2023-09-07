document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const hashInfo = document.getElementById("hashInfo");
    const hashValue = document.getElementById("hashValue");
    const inputFieldEl = document.getElementById("inputField")


    form.addEventListener("reset", function (event) {
        event.preventDefault();
        window.location.hash = ''; // Remove the hash when the form is reset
        hashValue.textContent = ''; // Clear the hash display
        alert("Form has been reset!");
    });
    
    
    window.addEventListener("hashchange", function () {
        const currentHash = window.location.hash;
        hashValue.textContent = currentHash;
    });

    const initialHash = window.location.hash;
    if (initialHash) {
        hashValue.textContent = initialHash;
    }
});

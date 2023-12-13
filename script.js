function generateRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the random number on the page
    var randomNumberElement = document.getElementById('randomNumber');
    if (randomNumberElement) {
        randomNumberElement.textContent = 'Random Number: ' + randomNumber;
    }
}

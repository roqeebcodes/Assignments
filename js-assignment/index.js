   function numberGuess(range) {
    let userName = prompt("Enter your name");
    let userInput = prompt("Guess a number");

    
    if (userInput <= range) {
        alert("You won a point, proceed to stage 2");  
    }
     else {
        alert("Incorrect guess, try again");
    }
    
}
numberGuess(2);

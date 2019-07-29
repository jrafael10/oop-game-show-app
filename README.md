# oop-game-show-app
-techdegree project 4-

This project is a browser-based word guessing game: 
"Phrase Hunter." 
This project uses JavaScript and OOP (Object-Oriented Programming) paradigm to select a random,
hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, I created two classes with specific properties and methods. 
I created a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

My code chooses a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.

# Changes made:

<ol>
<li>Instruction is provided above the li elements that hold the displayed matched letters.</li>
<li>The computer will make a sound when the user is selecting a key, indicating whether the selected key is right or wrong.</li>
<li>When a match is found, the li elements that hold the displayed match letters has a black and solid border and the color of the letter is black.</li>
</ol>


/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
     /**
      * Creates phrases for use in game 
      * @return {array} An array of phrases that could be used in the game.
      */

     createPhrases() {
        const phrases = [new Phrase('We can do it'), new Phrase('I love JavaScript'), new Phrase('I can show you the world'), new Phrase('We know'), 
                           new Phrase('I can do all things')];
    
        return phrases;
     }


     /**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
      */

     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)]
     }

     /**
      * Begins by selecting a random phrase and displaying it to user
      */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();

        
       
         }

    /**
     * Checks for winning move 
     * @return {boolean} True if game has been won, false if game wasn't won
     */

    checkForWin() {
         const shownLetters = document.getElementsByClassName('show');
         const spaces = document.getElementsByClassName('space');
         return (shownLetters.length + spaces.length) == this.activePhrase.phrase.length;
    }


    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game ig
     */
    removeLife() {
        const wrongSound = document.querySelector('.wrongSound');
        const heartImage = document.getElementsByTagName('img');
        heartImage[this.missed].src = 'images/lostHeart.png'
        wrongSound.play();
       
        

        
        if(this.missed >= 4){
           this.gameOver(false) ;
        } else {
            this.missed += 1;
        }
       
        
    }
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        
        setTimeout(function() {
        this.missed = 0;
        const lettersContainer = document.querySelector('#phrase ul');
        lettersContainer.innerHTML = '';
        const keys = document.getElementsByClassName('key');
        for(let i = 0; i<keys.length; i++){
            keys[i].disabled = false;
            keys[i].className = "key";
        }
        const heartImage = document.querySelectorAll('img');
        console.log(heartImage);
        for(let j = 0; j<heartImage.length; j++){
            heartImage[j].src = 'images/liveHeart.png';
        }
    

   
            
            document.getElementById('overlay').style.display = 'block' ;
        if(!gameWon){
        
            document.querySelector('.start').classList.add('lose');
            document.querySelector('.start').classList.remove('win');
        document.getElementById('game-over-message').textContent = "Sorry, better luck next time.";
        
        
        
        
        } else {
           
           
            document.querySelector('.start').classList.add('win');
            document.querySelector('.start').classList.remove('lose');
        document.getElementById('game-over-message').textContent = "Great job!";
             }
           }, 500)
        
    }

    /**
     * Handles onscreen keyboard button clicks 
     * @param (HTMLButtonElement) button - The clicked button element
     * 
     */

    handleInteraction(button) {
        button.setAttribute('disabled', true);
        if(!this.activePhrase.checkLetter(button.textContent)){
            button.classList.add('wrong');
           
            this.removeLife();  
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
             this.gameOver(true); 
            }
        }

        console.log('missed: ' + this.missed);
    }

    


 }
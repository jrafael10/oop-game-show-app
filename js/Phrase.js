/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
     }
     
     /**
      * Display phrase on game board
      */
     addPhraseToDisplay(){
        let ul = document.querySelector('#phrase ul');
        
        for(let i = 0 ; i < this.phrase.length; i++){
            let li = document.createElement('li');
             if(this.phrase.charAt(i) === " "){
                 li.className = "space";
                 li.textContent = " ";
                 ul.appendChild(li);
             } else {
                 li.className = `hide letter ${this.phrase.charAt(i)}`;
                 li.textContent = this.phrase.charAt(i);
                 ul.appendChild(li);
             }

         }

     }

     /**
      * Checks if passed letter is in phrase
      * @param (string) letter - letter to check
      */
     checkLetter(letter) {
         return this.phrase.includes(letter);

     }
     /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
      */

     showMatchedLetter(letter) {
         const lis = document.getElementsByClassName(letter);
        for(let i =0; i<lis.length; i++){
            if(lis[i].className == `hide letter ${letter}`){
                lis[i].className = `show letter ${letter}`;
                //Changes applied
                lis[i].style.border = "solid";
                lis[i].style.borderColor = "black";
                lis[i].style.color = "black";
                document.querySelector('.right').play();
               

                
            }
            
        }





     }
     
 }

 
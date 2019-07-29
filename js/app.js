/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 

 let game; 
 let keypress =[];
let disable = false;

let resetButton = document.getElementById('btn__reset');


resetButton.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
    keypress = [];
    
})

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', function(e){
if(e.target.tagName == 'BUTTON'){
    console.log(e.target);
   game.handleInteraction(e.target);
}
})


document.addEventListener('keydown', function (evt){
    //const keys = document.querySelector('.key');
    if(document.getElementById('overlay').style.display === 'none'){
    if(evt.keyCode >= 65 && evt.keyCode <=90){  
   const char =  String.fromCharCode(evt.keyCode || evt.key).toLowerCase();
   const keys = evt.target.getElementsByClassName('key');


  
   
   for(let i = 0; i<keys.length; i++){
    if(keys[i].textContent == char){
     //  disableKey = false;
        if(keypress.includes(char)){
            return false;
        } else {
        game.handleInteraction(keys[i]);
        keypress.push(char);
        }
     
        
        
        
    } 
} 

  
   
   
   
     
    

   }
   console.log(disable);
   console.log(keypress);
   console.log(keypress.length);

   //return disableKey;

   
}})




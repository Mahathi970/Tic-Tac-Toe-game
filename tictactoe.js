//restart game button
var restart = document.querySelector("#btn");
//grab all the squares
var squares = document.querySelectorAll('td');
//check all the squares
function clearboard(){
    var react = prompt("Want to restart the game? (yes/no)");
    if(react === 'yes'){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent = "";
    }
}
}

//restart eventlistenser
restart.addEventListener("click",clearboard);

//check square marker
function change(){
     if(this.textContent === ''){
         this.textContent = 'X';
     }
     else if(this.textContent === 'X'){
         this.textContent = 'O';
     }
     else{
         this.textContent = '';
     }
}
//loop to add all event listeneres
for(var i = 0;i<squares.length;i++){
    squares[i].addEventListener("click",change);
}   

    

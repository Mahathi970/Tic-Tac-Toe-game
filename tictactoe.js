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



    // Checking if Player X won or not and after
    // that disabled all the other fields
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
      
        window.alert('Player X won');
    }
    
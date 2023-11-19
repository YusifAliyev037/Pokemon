console.log(window);

const gameRule = ["e","f", "w"];



function randomElement(){
    const randomIndex = Math.floor(Math.random() * gameRule.length);
        return gameRule[randomIndex];
}

function resultGame(u,c){
    console.log(u);
        console.log(c);

    if(u == "w" && c == "f"){
        console.log("WIN");

    }else if(u == "f" && c == "e" ){
        console.log("WIN");
    }else if(u == "e" && c == "w"){
        console.log("WIN");
    }else if ( u ==  c){
        console.log("DRAW");
        
    }else{
        console.log("LOSE");
    }
}

window.addEventListener("keypress", function(e){
    // console.log(e.key);

    const userChoise = e.key;

   if(gameRule.indexOf(userChoise) !=-1){
        
        const compChoise = randomElement();

        resultGame(userChoise, compChoise);


   } else{alert("Duzgun herf sec: bunlar olmalidir: e f w");

   }
});
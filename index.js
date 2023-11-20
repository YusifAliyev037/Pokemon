console.log(window);

const gameRule = ["e","f", "w"];
let player1Point = 0;
let player2Point = 0;


const showPoint1 = document.querySelector("#showPoint1");
const showPoint2 = document.querySelector("#showPoint2");

const showresult1 = document.querySelector("#showResult1");
const showresult2 = document.querySelector("#showResult2");

const showImg1 = document.querySelector("#showImg1");
const showImg2 = document.querySelector("#showImg2");



function randomElement(){
    const randomIndex = Math.floor(Math.random() * gameRule.length);
        return gameRule[randomIndex];
}

function resultGame(u,c){
    console.log(u);
    console.log(c);
    showImg1.src = `./img/${u}.png`;
    showImg2.src = `./img/${c}.png`;

    if(u == "w" && c == "f"){
        console.log("WIN");
        player1Point+=1;

        showPoint1.innerHTML = player1Point; 
        showresult1.innerHTML = "WIN";
        showresult2.innerHTML = "LOSE";

        showresult1.style.color="green";
        showresult2.style.color="red";
    }else if(u == "f" && c == "e" ){
        console.log("WIN");
        player1Point+=1;
        showPoint1.innerHTML = player1Point;
        showresult1.innerHTML = "WIN";
        showresult2.innerHTML = "LOSE";

        showresult1.style.color="green";
        showresult2.style.color="red";

    }else if(u == "e" && c == "w"){
        console.log("WIN");
        player1Point+=1;
        showPoint1.innerHTML = player1Point;
        showresult1.innerHTML = "WIN";
        showresult2.innerHTML = "LOSE";

        showresult1.style.color="green";
        showresult2.style.color="red";
        // showresult1.classList.add("text-success")
    }else if ( u ==  c){
        console.log("DRAW");
        showresult1.innerHTML = "DRAW";
        showresult2.innerHTML = "DRAW";

        showresult1.style.color="gray";
        showresult2.style.color="gray";

    }else{
        console.log("LOSE");
        player2Point+=1;
        showPoint2.innerHTML = player2Point;
        showresult2.innerHTML = "WIN";
        showresult1.innerHTML = "LOSE";

        showresult2.style.color="green";
        showresult1.style.color="red";


    }
}

window.addEventListener("keypress", function(e){
    console.log(e.key);

    const userChoise = e.key;

   if(gameRule.indexOf(userChoise) !=-1){
        
        const compChoise = randomElement();

        resultGame(userChoise, compChoise);


   } else{alert("Duzgun herf sec: bunlar olmalidir: e f w");

   }
});
let userscore =0;
let computerscore=0;
const userscore_span =document.getElementById("user-score");
const computerscore_span =document.getElementById("comp-score");
const sroceBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getcomputerchoise(){
    const choise = ['r','p','s'];
    const randomno = (Math.floor(Math.random() * 3));
    return choise[randomno];
}
//console.log(getcomputerchoise());
function converttoword(letter){
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    if(letter=="s") return "Scissor";

}

function win(userchoise, computerchoise){
    //console.log("win");
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML= computerscore;
    const smalluserword ="(user)" .fontsize(3).sup();
    const smallcompword ="(comp)" .fontsize(3).sup();
    result_p.innerHTML= `${converttoword(userchoise)} ${smalluserword} beats  ${converttoword(computerchoise)}${smallcompword}   "..YOU WIN!!!"`; 
    //document.getElementById(userchoise).classList.add('yellow-glow');//for yellow color on clicking
    //setTimeout(function())
    //result_p.innerHTML= converttoword(userchoise) + " beats " +converttoword(computerchoise) + "..YOU WIN!!!"; 
    //console.log(user);
    //console.log(computer);
    //console.log(userscore);
}
function loose(userchoise, computerchoise){
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML= computerscore;
    const smalluserword ="(user)" .fontsize(3).sup();
    const smallcompword ="(comp)" .fontsize(3).sup();
    result_p.innerHTML= `${converttoword(computerchoise)}${smallcompword}  beats ${converttoword(userchoise)} ${smalluserword}  "..you lost!!!"`; 
    //console.log("lost");
}
function draw(userchoise, computerchoise){
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML= computerscore;
    const smalluserword ="(user)" .fontsize(3).sup();
    const smallcompword ="(comp)" .fontsize(3).sup();
    result_p.innerHTML= `${converttoword(computerchoise)}${smallcompword} no beats ${converttoword(userchoise)} ${smalluserword}  "..DRAW<>!!!"`; 
    //console.log("draw");
}
function Game(userchoise)
{
    const computerchoise=getcomputerchoise();
    //console.log(computerchoise);

    //console.log("user choise =>" +userchoise);
   // console.log("comp choise => " +computerchoise);
   switch(userchoise+computerchoise){
        case "rs":
        case "pr":
        case "sp":
           // console.log("user wins");
           win(userchoise, computerchoise)
            break;
        case "rp":
        case "ps":
        case "sr":
           // console.log("user loose");
           loose(userchoise, computerchoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoise, computerchoise);
            break;
   }
}


function main(){
rock_div.addEventListener('click', function(){
    Game("r");
})
paper_div.addEventListener('click', function(){
    Game("p");
})
scissor_div.addEventListener('click', function(){
    Game("s");
})
}
main();
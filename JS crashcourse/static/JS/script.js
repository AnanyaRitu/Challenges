//challenge-1
function ageInDays() {
  var birthyear = prompt("What year wreer you born?");
  var ageInd = (2020 - birthyear) * 365;
  console.log(ageInd);
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You rae " + ageInd + " days old.");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flexcatgen");
  image.src = "https://cdn2.thecatapi.com/images/9oj.gif";
  div.appendChild(image);
}
//challenge3:..........
function rpsGame(yourChoice) {
  console.log(yourChoice.id);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randomToRps());
  console.log(botChoice);
  results = decideWinner(humanChoice, botChoice); // [0,1]--human lost, bot won
  console.log(results);

  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}
function decideWinner(hChoice, bChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { scissor: 0, rock: 1, paper: 0.5 },
    scissor: { scissor: 0.5, rock: 0, paper: 1 },
  };
  var yourscore = rpsDatabase[hChoice][bChoice];
  var computerScore = rpsDatabase[bChoice][hChoice];
  return [yourscore, computerScore];
}
function randomToRps() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}
function finalMessage([yourscore, computerscore]) {
  if (yourscore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourscore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}
function rpsFrontEnd(hiChoice, biChoice, fMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };
  //let's remove all teh images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[hiChoice] +
    "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'/>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[biChoice] +
    "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1) '/>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    fMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    fMessage["message"] +
    "</h1>";
  console.log(fMessage);
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
}

//challenge -4.. button color changing

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonthingy) {
  if (buttonthingy.value == "red") {
    buttonsRed();
  } else if (buttonthingy.value == "green") {
    buttonsGreen();
  } else if (buttonthingy.value == "reset") {
    buttonsReset();
  } else if (buttonthingy.value == "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonsReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function randomColors() {
  var choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randNum = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randNum]);
  }
}

//challenge-5

let blackjackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "A", "J"],
  'cardsMap': {'2':2, '3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9, '10':10,'K':10,'Q':10,'J':10,'A':[1,11],},
  'wins':0,
  'losses':0,
  'draws':0,
  'isStand':false,
  'turnsover': false
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("./sounds/swish.m4a");
const winSound = new Audio("./sounds/cash.mp3");
const lossSound = new Audio("./sounds/aww.mp3");


document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);
  document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackHit() {
  if(blackjackGame['isStand']===false){
  let card=randomCard();
  console.log(card);
  updateScore(card, YOU)
  showScore(YOU)
  showCard(card, YOU);
}
}

function showCard(cardT, activePlayer) {
  if(activePlayer['score'] <=21){
  let cardImage = document.createElement("img");
  cardImage.src=`./images/${cardT}.png`
  document.querySelector(activePlayer["div"]).appendChild(cardImage);
  hitSound.play();
  }
}

function blackjackDeal() {
   // showResult(computeWinner());
    if (blackjackGame['turnsover']=== true){
      blackjackGame['isStand']=false;
    let yourImages = document.querySelector("#your-box").querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");

    for (i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }
    for (i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }
    

    YOU['score']=0;
    DEALER['score']=0;

    document.querySelector('#your-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').textContent=0;

    document.querySelector('#your-blackjack-result').style.color='#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color='#ffffff';
    document.querySelector('#blackjack-result').textContent="Let's Play";
    document.querySelector('#blackjack-result').style.color="black";
    blackjackGame['turnsover']=true;
  }
}

function randomCard(){
  let randomIndex=Math.floor(Math.random()*13)
  return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer){
if (card==='A'){
 if( activePlayer['score']+ blackjackGame['cardsMap'][card][1]<=21){
  activePlayer['score']+= blackjackGame['cardsMap'][card][1]
  }
  else{
    activePlayer['score']+= blackjackGame['cardsMap'][card][0]
  }
}
else{
  activePlayer['score']+= blackjackGame['cardsMap'][card]
}
}

function showScore(activePlayer){
  if (activePlayer['score']>21){
    document.querySelector(activePlayer['scoreSpan']).textContent= 'BUST!'
    document.querySelector(activePlayer['scoreSpan']).style.color= 'red'
  }
  else{
  document.querySelector(activePlayer['scoreSpan']).textContent= activePlayer['score']
  }
}

function sleep(ms){
  return new Promise(resolve =>setTimeout(resolve, ms))
}

async function dealerLogic(){
  blackjackGame['isStand']=true;
  while(DEALER['score']<16&& blackjackGame['isStand']===true){
  let card=randomCard();
  showCard(card,DEALER);
  updateScore(card, DEALER);
  showScore(DEALER);
  await sleep(1000);
  }
 // if(DEALER['score']>15){
    blackjackGame['turnsover']=true;
    let winner= computeWinner();
    showResult(winner);
   // console.log(blackjackGame['turnsover'])
  //}
}
//computes who the winner is and updates the wins and losses

function computeWinner(){
  let winner;
  if(YOU['score']<=21){

    if(YOU['score'] > DEALER['score']|| DEALER['score']>21)
    {
      blackjackGame['wins']++;
console.log('You Win!');
winner= YOU;
  } else if(YOU['score'] === DEALER['score']){
    blackjackGame['draws']++;
    console.log('you drew!')

  }else if(YOU['score'] < DEALER['score']|| DEALER['score']>21){
    blackjackGame['losses']++;
    console.log ('You lost!');
    winner=DEALER;
  }
}
  else if (YOU['score']>21 && DEALER['score']<=21){
    blackjackGame['losses']++;
    console.log ('You lost!');
    winner=DEALER;
  }
  else if(YOU ['score']>21 && DEALER['score']>21){
    blackjackGame['draws']++;
    console.log('You Drew!');
  }
  console.log('Winner is', winner);
  console.log(blackjackGame);
  return winner;
}

function showResult( winner){
let message, messageColor;
if(blackjackGame['turnsover']===true){
if(winner=== YOU){
  document.querySelector('#wins').textContent=blackjackGame['wins'];
  message='You won!';
  messageColor= 'green';
  winSound.play()
}else if(winner=== DEALER){
  document.querySelector('#loses').textContent=blackjackGame['losses'];
  message='You lost!';
  messageColor= 'red';
  lossSound.play()
}else{
  document.querySelector('#draws').textContent=blackjackGame['draws'];
  message='You drew!'
  messageColor='black'
}
document.querySelector('#blackjack-result').textContent= message;
document.querySelector('#blackjack-result').style.color= messageColor;
}
}
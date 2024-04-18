// const ROCK = 0;
// const PAPER = 1;
// const SCISSOR = 2;

function computerPlay() {
  //Math.random() * 3 - 1 ranges from -1 to 2, which makes the distribution of result more even then
  // Math.round(Math.round() * 2), Math.abs is to prevent the result from being -1
  return Math.abs(Math.ceil(Math.random() * 3 - 1));
}

/**
 * 
 * @param {*} hChoice 
 * @param {*} cChoice 
 * @returns 0 if player lose, 1 if player win, 2 if its a draw
 */
function compare(hChoice, cChoice) {
  let h = hChoice;
  let c = cChoice;
  if((h + 1) % 3 == c)
	return 0;
  else if((c + 1) % 3 == h)
	return 1;
  else return 2;
}

/**
 * 
 * @param {*} child user's rps symbols
 * @param {*} parent user's rps div
 */
function rpsEvent(child) {
  //make symbols other than the chosen one unopaque
  // user's 
  var parent = document.querySelector(".user .rps");
  var childrenArray = [...parent.children];
  var childIdx = childrenArray.indexOf(child);
  makeUnopaque(childIdx, childrenArray);

  // computer's
  var cChoice = computerPlay(); // this act as a childIdx 
  var parent1 = document.querySelector(".computer .rps");
  var childrenArray1 = [...parent1.children];
  makeUnopaque(cChoice, childrenArray1);

  // annouce result, change scores
  var container = document.querySelector("body");
  var button = document.querySelector(".restart"); 
  var resultElement = document.createElement("h3");
  resultElement.classList.add("result");
  container.insertBefore(resultElement, button);

  switch(compare(childIdx, cChoice)) {
    case 0:
      resultElement.textContent = "YOU LOSE!";
      var computerScore = document.querySelector(".computer .scores");
      computerScore.textContent++;
      break;
    case 1:
      resultElement.textContent = "YOU WIN!";
      var userScore = document.querySelector(".user .scores");
      userScore.textContent++;
      break;
    default:
      resultElement.textContent = "DRAW!";
  }
}
function makeUnopaque(childIdx, childrenArray) {
  for(var i = 0; i < 3; i++) {
    // make the element other than picked one un-opaque
    if(childIdx === i) continue;
    childrenArray[i].style.opacity = 0;
  }
}
function init() {
  // add on-click action to rps symbols
  const h_rps = document.querySelector(".user .rps");

  for(const child of h_rps.children) {
    child.addEventListener("click", () => rpsEvent(child))
  }

  // add action to restart button
  const rst_button = document.querySelector(".restart");
  rst_button.addEventListener("click", () => {
    // make other unchosen symbols opaque
    for(const child of h_rps.children) {
      child.style.opacity = 1;
    }

    var c_rps = document.querySelector(".computer .rps");
    for(const child of c_rps.children) {
      child.style.opacity = 1;
    }
    
    var resultElement = document.querySelector(".result");
    resultElement.remove();
  });
}

init();
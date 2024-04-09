var choices = ["rock", "paper", "scissor"];

function computerPlay() {
  let choice = choices[Math.round(Math.random() * 2)];
  return choice;
}

function humanPlay() {
  do {
  let temp = prompt("Make your choice:");
  var choice = temp.toLowerCase();
  } while(!choices.includes(choice));
  return choice;
}

function compare(hChoice, cChoice) {
  let h = choices.indexOf(hChoice);
  let c = choices.indexOf(cChoice);
  if((h + 1) % 3 == c)
	return 0;
  else if((c + 1) % 3 == h)
	return 1;
  else return 2;
}
function gameplay() {
  while(true) {
    let computerChoice = computerPlay();
    let humanChoice = humanPlay(); 

    
    if(compare(humanChoice, computerChoice) == 0)
      alert(`Computer chooses ${computerChoice}, u lose`);
  else if(compare(humanChoice, computerChoice) == 1)
    alert(`Computer chooses ${computerChoice}, u win`);
  else alert(`Computer chooses ${computerChoice}, draw`);
  }
}
gameplay();

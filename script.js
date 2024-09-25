alert(`Do you want to play a game? 😈`);


//if (prompt !== `R` || `P` || `S`) {
//    alert(`try again`);
//}

let again = true;

let ties = 0;
let wins = 0;
let losses = 0;

while (again) {

    let input = prompt(`Go ahead, just enter R for rock ✊, P for paper ✋, or S for scissors ✌`);
    if (input == null) {
        alert(`You're no fun`);
        again = false;
        break;
    }

    const choices = [`R`, `P`, `S`];
    const random = Math.floor(Math.random() * 3);
    const compChoice = choices[random];

    alert(`I see you chose ${input}, and I chose ${compChoice}`);


    if (input === compChoice) {
        alert(`Then its a tie`);
    } else if (input === 'R' && compChoice === `S` ||
        input === `S` && compChoice === `P` ||
        input === `P` && compChoice === `R`) {
        alert(`Looks like you beat me this time`);
    } else {
        alert(`Ha, looks like I win`);
    }
    again = confirm(`Play again?`);
}

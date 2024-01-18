// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = parseInt(prompt(`Guess a number between ${minNum} and ${maxNum}`));

    if (isNaN(guess)) {
        alert('Please enter a valid number');
        continue;
    }
    else if (guess < minNum || guess > maxNum) {
        alert(`Please enter a number between ${minNum} and ${maxNum}`);
        continue;
    }
    else {
        attempts++;
        if (guess < answer) {
            alert('Incorrect! Please guess a higher number.');
        }
        else if (guess > answer) {
            alert('Incorrect! Please guess a lower number.');
        }
        else {
            alert(`Correct! You guessed the number in ${attempts} attempts.`);
            running = false;
        }
    }
}
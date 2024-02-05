// To-Do List

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let ul = document.getElementById("tasks");
    let li = document.createElement("li");

    li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Remove</button>`;

    ul.appendChild(li);
    taskInput.value = "";
}

function deleteTask(btn) {
    let li = btn.parentNode;
    li.parentNode.removeChild(li);
}

// Guess the Game

// const secretNumber = Math.floor(Math.random() * 100) + 1;

// let attempts = 0;

// function checkGuess() {
//     const guessInput = document.getElementById('guessInput');
//     const message = document.getElementById('message');

//     const userGuess = parseInt(guessInput.value);

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         alert('Please enter a valid number between 1 and 100.');

//         return;
//     }

//     attempts++;

//     if (userGuess === secretNumber) {
//         message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
//         message.style.color = 'green';
//         guessInput.disabled = true;
//     } else {
//         const hint = userGuess < secretNumber ? 'Too low! Try again.' : 'Too high! Try again.';
//         message.textContent = `${hint} Attempts: ${attempts}`;
//         message.style.color = 'red';
//     }
// }
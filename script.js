let playerScore = 0
let computerScore = 0

document.querySelector(".restart").addEventListener("click", restartGame)

function getComputerChoice() {
  let signs = ["rock", "paper", "scissors"]
  let randomNumber = Math.floor(Math.random() * 3)
  return signs[randomNumber]
}

function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  let arr = [playerSelection, computerSelection]
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
  }

  function win(selections) {
    playerScore++
    return `You win! ${capitalize(selections[0])} beats ${capitalize(
      selections[1]
    )}.`
  }

  function lose(selections) {
    computerScore++
    return `You lose! ${capitalize(selections[1])} beats ${capitalize(
      selections[0]
    )}.`
  }

  function draw(playerSelection) {
    return `It's a draw. You and computer both played ${capitalize(
      playerSelection
    )}.`
  }

  if (playerSelection === computerSelection) {
    return draw(playerSelection)
  }

  const combinations = {
    rockpaper: false,
    rockscissors: true,
    paperrock: true,
    paperscissors: false,
    scissorspaper: true,
    scissorsrock: false
  }

  return combinations[playerSelection + computerSelection]
    ? win(arr)
    : lose(arr)
}

function updateScore(message) {
  document.querySelector(".player").textContent = `Player score: ${playerScore}`
  document.querySelector(
    ".computer"
  ).textContent = `Computer score: ${computerScore}`
  document.querySelector(".message").textContent = message
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    document.querySelector(".modal-message").textContent =
      playerScore === 5 ? "You won!" : "You lost."
    document.querySelector(".overlay").classList.remove("hidden")
  }
}

function restartGame() {
  playerScore = computerScore = 0
  updateScore("")
  document.querySelector(".overlay").classList.add("hidden")
}

const signs = Array.from(document.querySelectorAll(".sign"))
signs.forEach(sign =>
  sign.addEventListener("click", e => {
    let message = playSingleRound(sign.dataset.sign, getComputerChoice())
    updateScore(message)
    checkWinner()
  })
)

// function game() {
//   let scores = [0, 0]
//   for (let i = 0; i < 5; i++) {
//     const outcome = playSingleRound(
//       prompt("Choose a sign"),
//       getComputerChoice()
//     ).split(" ")[1]
//     console.log(outcome)
//     outcome === "win!"
//       ? (scores[0] += 1)
//       : outcome === "lose!"
//       ? (scores[1] += 1)
//       : null
//   }
//   if (scores[0] > scores[1]) {
//     alert(
//       `Congratulations, you won! The final score is ${scores[0]} to ${scores[1]}`
//     )
//   } else if (scores[1] > scores[0]) {
//     alert(`Bad luck, you lost! The final score is ${scores[0]} to ${scores[1]}`)
//   } else {
//     alert(`You tied, the final score is ${scores[0]} to ${scores[0]}`)
//   }
// }

// game()

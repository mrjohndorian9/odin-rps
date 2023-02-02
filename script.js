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
    return `You win! ${capitalize(selections[0])} beats ${capitalize(
      selections[1]
    )}.`
  }

  function lose(selections) {
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

function game() {
  let scores = [0, 0]
  for (let i = 0; i < 5; i++) {
    const outcome = playSingleRound(
      prompt("Choose a sign"),
      getComputerChoice()
    ).split(" ")[1]
    console.log(outcome)
    outcome === "win!"
      ? (scores[0] += 1)
      : outcome === "lose!"
      ? (scores[1] += 1)
      : null
  }
  if (scores[0] > scores[1]) {
    alert(
      `Congratulations, you won! The final score is ${scores[0]} to ${scores[1]}`
    )
  } else if (scores[1] > scores[0]) {
    alert(`Bad luck, you lost! The final score is ${scores[0]} to ${scores[1]}`)
  } else {
    alert(`You tied, the final score is ${scores[0]} to ${scores[0]}`)
  }
}

game()

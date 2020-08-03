const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
// setting currentime to time left which is mentioned in html 
let currentTime = timeLeft.textContent

// to display the mole in random position among 9 boxes
function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  hitPosition = randomPosition.id
}

// when mole position and mouse click of user matches score will be up by one
square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      // to make hitposition null as soon as score is added
      hitPosition=null
    }
  })
})

// move moving the mole for every five second
function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

moveMole()

// functio to show countdown time by making it decreased by 1 by decrement function
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime

  // displaying the alert message as soon time is over
  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is' + result)
  }
}

let timerId = setInterval(countDown, 1000)
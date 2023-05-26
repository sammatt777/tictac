let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");
let overlay = document.getElementById("overlay");
let restartBtn = document.getElementById("btn-restart");
let quitBtn = document.getElementById("btn-quit");
let clickAudio = document.getElementById("click");
let gameoverAudio = document.getElementById("gameover");
let wonArr;

let currentTurn = "Player 01";

// cells.forEach((cell)=>{

//   cell.addEventListener('mouseenter', hoverIn)
//   cell.addEventListener('mouseleave', hoverOut)
//   cell.addEventListener('click', clicked)


// })


// function hoverIn(){

//   let currentClass = currentTurn === 'Player 01' ? 'cross' : 'circle';

// if(this.classList.contains('cross') || this.classList.contains('circle')){
// this.style.cursor = 'not-allowed'
// }
// else{
//   this.classList.add(`${currentClass}-hover`)
// }
// }

// function hoverOut(){

//   this.classList.remove('cross-hover')
//   this.classList.remove('circle-hover')

// }

// function clicked(){
// let currentClass = currentTurn === 'Player 01' ? 'cross': 'circle';

// this.classList.remove(`${currentClass}-hover`)
// this.classList.add(`${currentClass}`)
// clickAudio.play()


// if(checkWinner(currentClass)){
//   wonArr.forEach((i) => cells[i].classList.add("highlight"));
//   message.innerHTML = `${currentTurn} is Winner`
//   gameover() 
// }


    



// currentTurn === 'Player 01' ? (currentTurn = 'Player 02') : (currentTurn = 'Player 01')

// // currentTurn === 'Player 01'? message.textContent = 'Player 02': message.textContent = 'Player 01';
// currentTurn === 'Player 01'? message.textContent = `${currentTurn}'s Turn `: message.textContent = `${currentTurn}'s Turn`;


// }


// function checkWinner(currentClass){

// return wins.some((win) =>{

// let result = win.every( (i) => cells[i].classList.contains(currentClass) )

// if(result){

//   wonArr = win

// }

// return result

// })


// }

// let wins = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];



let currentPlayer = 'Player 01'

cells.forEach(function(cell){

cell.addEventListener('mouseenter', hoverIn)
cell.addEventListener('mouseleave', hoverOut)
cell.addEventListener('click', clicked)

})


function hoverIn(){

  let currentClass = currentPlayer === 'Player 01' ? 'cross' : 'circle';


  if(this.classList.contains('cross')  || this.classList.contains('circle')){

      this.style.cursor = 'not-allowed'

    }
    else{
      this.classList.add(`${currentClass}-hover`)

  }

}

function hoverOut(){

this.classList.remove(`cross-hover`)
this.classList.remove(`circle-hover`)

}


function clicked(){
  let currentClass = currentPlayer === 'Player 01' ? 'cross': 'circle' 

  this.classList.remove(`${currentClass}-hover`)
  this.classList.add(`${currentClass}`)


  


  currentPlayer === 'Player 01' ? (currentPlayer = 'Player 02'): (currentPlayer = 'Player 01');

  currentPlayer === 'Player 01' ? message.textContent = `${currentPlayer}'s Turn`: message.textContent =`${currentPlayer}'s Turn` 

}









// cells.forEach((cell) => {
//   cell.addEventListener("mouseenter", hoverIn);
//   cell.addEventListener("mouseleave", hoverOut);
//   cell.addEventListener("click", action, { once: true });
// });

// function hoverIn() {
//   let currentClass = currentTurn === "Player 01" ? "cross" : "circle";
//   console.log(currentClass);
//   if (this.classList.contains("cross") || this.classList.contains("circle")) {
//     this.style.cursor = "not-allowed";
//   }

//   else {
//     this.classList.add(`${currentClass}-hover`);
//   }
// }

// function hoverOut() {
//   if (this.classList.contains("cross-hover") || this.classList.contains("circle-hover") ) {
//     this.classList.remove("cross-hover");
//     this.classList.remove("circle-hover");
//   }
  
// }


// function action() {
//   let currentClass = currentTurn === "Player 01" ? "cross" : "circle";
//   this.classList.remove(`${currentClass}-hover`);
//   this.classList.add(currentClass);
//   clickAudio.play();

// //            For Win is If

//   if (isWinner(currentClass)) {
//     message.innerText = `${currentTurn} Won !!!`;
//     wonArr.forEach((i) => cells[i].classList.add("highlight"));
//     gameover();
//     return;
//    } 

// //    for Win is If
//    else {

//     console.log('ggggg');
//     let res = Array.from(cells).every((cell) => {
//       return cell.classList.length === 2;
//     });
   
//     console.log(res);
// //            For Draw is else

//       if (res) {
//       message.innerText = `It is a TIE !!!`;
//       cells.forEach((cell) => {
//         cell.classList.add("highlight");
//       });
     
//        gameover();
//       return;
//     }
  
  
//   }

// currentTurn === "Player 01"? (currentTurn = "Player 02"): (currentTurn = "Player 01");

//   message.innerText = `${currentTurn}'s Turn!`;

// }


// function isWinner(curClass) {

//   return wins.some((win) => {

//     let res = win.every((i) => cells[i].classList.contains(curClass));
                    
//     if (res) {
//       wonArr = win;
//     }

//     return res;

//   });

// }


// let wins = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];



function gameover() {

  cells.forEach((cell) => {
    cell.removeEventListener("mouseenter", hoverIn);
    cell.removeEventListener("mouseleave", hoverOut);
    cell.removeEventListener("click", clicked);
    // cell.style.cursor = "not-allowed";
  });

  gameoverAudio.play();

  setTimeout(() => {
    overlay.classList.add("active");
  }, 500);

}




restartBtn.addEventListener("click", restart);

function restart(){

location.reload()

}

// function restart() {
//   message.innerText = "Player 01's Turn";
//   overlay.classList.remove("active");

//   cells.forEach((cell) => {
//     cell.addEventListener("mouseenter", hoverIn);
//     cell.addEventListener("mouseleave", hoverOut);
//     cell.classList.remove("cross");
//     cell.classList.remove("cross-hover");
//     cell.classList.remove("circle");
//     cell.classList.remove("circle-hover");
//     cell.classList.remove("highlight");
//     cell.removeEventListener("click", action);
//     cell.addEventListener("click", action, { once: true });
//     cell.style.cursor = "pointer";
//   });
// }


quitBtn.addEventListener("click", quit);

function quit() {
// window.close();
location.reload()
}



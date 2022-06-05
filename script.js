function nValidation (){
    let n;
    do{
    n = prompt("Chose a number up to 100")
    } while ((n < 0 || n > 100) || isNaN(n) )  // while needs to be fals
    return n
}

function random255(){

if (switchOn == 0){    return Math.floor(Math.random()*256) }
else if (switchOn == 1) {return 000;}

}

function createGrit(n = 16){
    n = n*n;
    for ( let i = 0; i <n; i++){
        let item = document.createElement('div');
        item.classList.add(`item`);
        container.appendChild(item);
        
    };
    let squares = document.querySelectorAll(".item");
    squares.forEach(square => {
    square.addEventListener('mouseover', function(e){e.target.style.background = `rgb(${random255()},    ${random255()},${random255()})`})
});
}

function erase() {
    let toErase = document.querySelectorAll('.item');
    toErase.forEach(element => {
    container.removeChild(element)
    })
}

function press (){
    nValidation();
    erase();
    createGrit(n);
}


/************************************functions above -************ */


let n = 16;
const container = document.querySelector('.grid-container');
const pressMe = document.querySelector('.n-generator');
const black = document.querySelector('.black');
let switchOn = 0;
const eraser = document.querySelector('.erase');

container.setAttribute('style', `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`);
createGrit(n);

pressMe.addEventListener('click', () => {
    n = nValidation();
    if (n != null){
    erase()
    container.setAttribute('style', `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`);
    createGrit(n)
    }
  });

black.addEventListener('click',()=>{
    
    if (switchOn == 1){
        switchOn = 0
        black.textContent = "Black";
    }
    else {
        switchOn = 1
        black.textContent = "Colors";
    }
});

  eraser.addEventListener('click', ()=>{
    erase();
    createGrit(n);
  });



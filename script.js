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
        /*       
        item.width = `${960/n**.5}px`;
        item.height = `${960/n**.5}px`;
        square.style.cssText = `width:${960/n**.5}; height: ${960/n**.5};`;
        item.style.cssText = `width:${960/n**.5}px; height: ${960/n**.5}px;`; */
         

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

function columnGenerator(n = 16){
    let autoString = ""
    for (i = 0; i < n; i++){
        autoString += ' auto ';
    }
    return autoString;

}
/************************************functions above -************ */


let n;
const container = document.querySelector('.grid-container');
const pressMe = document.querySelector('.n-generator');
const black = document.querySelector('.black');
let switchOn = 0;
const eraser = document.querySelector('.erase');

container.setAttribute('style', `grid-template-columns:${columnGenerator(n)};`);
createGrit(n);

pressMe.addEventListener('click', () => {
    n = nValidation();
    if (n != null){
    erase()
    container.setAttribute('style', `grid-template-columns:${columnGenerator(n)};`);
    createGrit(n)
    }
  });

black.addEventListener('click',()=>{
    
    if (switchOn == 1){
        switchOn = 0}
    else {
        switchOn = 1
    }
});

  eraser.addEventListener('click', ()=>{
    erase();
    createGrit(n);
  });



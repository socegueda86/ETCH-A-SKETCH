function nValidation (){
    let n;
    do{
    n = prompt("Chose a number up to 100")
    } while ((n < 0 || n > 100) || isNaN(n) )  // while needs to be fals

    return n
}

function random255(){
    return Math.floor(Math.random()*256)
}

function createGrit(n = 16){
    for ( let i = 0; i <n; i++){
        let item = document.createElement('div');
        item.classList.add('class', `item`);
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


let n;
const container = document.querySelector('.grid-container');

const pressMe = document.querySelector('.n-generator');
pressMe.addEventListener('click', nValidation);

container.setAttribute('style', 'grid-template-columns: auto auto auto auto;');
createGrit(n);



/*
//////////////////
let nArray = [-5, 150, 5, null, 'a', 'asdfZ', ""]
console.log('Valor:, n,      , n < 0,     , n > 0,     , n!=null,     , (n < 0 || n > 100) && n != null)      && isNaN(n)')
nArray.forEach(n => {
    console.log ('Valor:', n,"     " , n < 0,"     ", n > 0,"        ", n!=null,
    "             ", (n < 0 || n > 100) && n != null, "                      ",  isNaN(n) )
})

,"     "
(n < 0 || n > 100) && n != null

('Valor:', n , n < 0, n > 0, n!=null, (n < 0 || n > 100) && n != null && isNaN(n))



a = prompt("ingrsa valores: -5, 5, 100, null, a, az, ")*/
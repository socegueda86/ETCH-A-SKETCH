function nValidation (){
    do{
    n = prompt("Chose a number up to 100")
    } while (!(n > 0 || n < 100 || n == null || parseInt(n) == NaN)) //
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


/************************************functions above -************ */


let n;

const pressMe = document.querySelector('.n-generator');
pressMe.addEventListener('click', nValidation);

let container = document.querySelector('.grid-container');
container.setAttribute('style', 'grid-template-columns: auto auto auto auto;');
createGrit(n);





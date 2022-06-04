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



    //container.addEventListener('mouseover', function(e){e.target.style.background = `rgb(${random255()},    ${random255()},${random255()})`})
}

let container = document.querySelector('.grid-container');
container.setAttribute('style', 'grid-template-columns: auto auto auto auto;');
createGrit();

/*let squares = document.querySelectorAll(".item");
squares.forEach(square => {
    square.addEventListener('mouseover', function(e){e.target.style.background = `rgb(${random255()},    ${random255()},${random255()})`})
});*/
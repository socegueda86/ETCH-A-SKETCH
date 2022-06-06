function nValidation(){
    let n;
    do{
    n = prompt("Chose a number up to 100")
    } while ((n < 0 || n > 100) || isNaN(n) )  // while needs to be fals
    return n
}

function random255(){
return Math.floor(Math.random()*256) }


function createGrit(n = 16){
    n = n*n;
    for ( let i = 0; i <n; i++){
        let item = document.createElement('div');
        item.classList.add(`item`);
        container.appendChild(item);
        
    };
    let squares = document.querySelectorAll(".item");
    
    squares.forEach(square => {
    square.addEventListener('mouseover', function(e){
//        if (e.target.style.background == "" ){        }

        e.target.style.background = stringFxCreator(e.target.style.background);
       // e.target.style.background = `rgba(${random255()},    ${random255()},${random255()}, ${randomFade(currentFade)})`
       // console.log(e.target.style)//
        
        })
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

/*function randomFade(localCurrentFade){

    console.log ("entro a random")

    if (fadeOn  == 0){
        return 1
    }
    else if (fadeOn  == 1){
         if (localCurrentFade <= 1){
            console.log ("entro a random --- if", currentFade)
  
          currentFade =  currentFade + .1
          console.log("currentFade:", currentFade)
         
        }
    return currentFade;

    }
}*/


/************************************functions above -************ */


let n = 16;
const container = document.querySelector('.grid-container');
const pressMe = document.querySelector('.n-generator');
const black = document.querySelector('.black');
let switchOn = 0;
let fadeOn = 0;
let currentFade = 0;
const eraser = document.querySelector('.erase');
const fade = document.querySelector('.fade');

const white = document.querySelector('.white');
const colors = document.querySelector('.colors');


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

eraser.addEventListener('click', () =>{
    erase();
    createGrit(n);
})

colors.addEventListener('click', ()  =>{
    switchOn = 0;

})

fade.addEventListener('click', () => {
    switchOn = 2;

});

black.addEventListener('click',()=>{
    
    switchOn = 1;
});

white.addEventListener('click', ()=>{
    switchOn = 3;
});


////////////#################### //////////////////////////////////////////////////
 

function stringFxCreator (string2 = ""){

    switch (switchOn) {

        case 0:
            return colors2 ();
            break;

        case 1:
            return black2 ();
            break;
        case 2:
            return fadeBlack (string2);
            break;     
        case 3:   
        return white2 ();
            break;
    
        default:
            console.log ("Error linea 146, stringFxCreator case 3")
            
            break;
    }
} 

function colors2 (){
    return `rgb(${random255()},${random255()},${random255()})`
}
    

function black2 (){
    return "rgb(0,0,0)"
}
    
function fadeBlack (string2){
       
    if (string2.substr(0,4) == "rgba" ){
        
        let localCurrentFade = parseFloat(string2.split(',')[3].slice(0,-1).trim())
        localCurrentFade += .1;    
        console.log( "first")
        return `rgba(0,0,0,${localCurrentFade})`
    }

    else if (string2 == ""){
        console.log( "2nd")
        return `rgba(0,0,0,.1)`
    }

    else if (string2 != 'rgb(0, 0, 0)' ){
        

        console.log( string2)
        return 'rgba(0,0,0,.1)'
    }

    else if (string2.substr(0,4) == "rgb("){
        console.log( "4th")
        return 'rgba(0,0,0)'
    }

    else {console.log ("algo falló")}
        
}
    

function white2 (){
    return "rgb(255,255,255)"
}


function createGrit(){

    for ( let i = 0; i <16; i++){
        let container = document.querySelector('.container');
        let item = document.createElement('div');
        item.classList.add('class', `item${i+1}`);
        container.appendChild(item);
    }
}


const container = document.querySelector('.container')
let grid = document.querySelector('.grid')
let squareSize = 16
let range = document.getElementById("size")
let size = document.querySelector('p')
console.log(range.value)

function changeSize(e){
    size.innerText = e.value  + "x" +  e.value
    squareSize = e.value
}

function apply(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild)
    }
    createGrid(squareSize)
}

function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild)
    }

    squareSize = 16
    createGrid(squareSize)
    size.innerText = squareSize + "x" + squareSize
    range.value = squareSize
}

createGrid(squareSize)


function createDiv(size){
    const div = document.createElement("div")
    div.classList.add('box')
    div.style.width = `${size}px`
    div.style.height = `${size}px`

    return div
}

function createGrid(gridSize){  
    for(let i = 0; i<gridSize; i++){
        for(let j = 0; j<gridSize; j++){
            grid.appendChild(createDiv(grid.clientWidth / gridSize))
        }
    }
}

grid.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains('box')){
        e.target.classList.add('hovered')
    }
})





const container = document.querySelector('.container')
let grid = document.querySelector('.grid')
let squareSize = 16
let range = document.getElementById("size")
let size = document.querySelector('p')

let rainbow = false
function switchToRainbow(){
    if(!rainbow){
        rainbow = true
    }else{
        rainbow = false
    }
}

let eraser = false
function switchToEraser(){
    if(!eraser){
        eraser = true
    }else{
        eraser = false
    }
}

document.addEventListener("mouseover", (e) => {sketching(e, "mouse")})
document.addEventListener("mousedown", (e) => {sketching(e, "mouse")})
function sketching(e, input){
    if(input == "mouse"){
        if(e.buttons !== 1) return;
        else{
            if(e.target.classList.contains('box')){
                let colors = ["red", "green", "blue", "yellow", "orange"]
                const randomColor = Math.floor(Math.random() * colors.length)
                if(rainbow){
                    e.target.style.backgroundColor = colors[randomColor]
                }else{
                    e.target.style.backgroundColor = 'black'
                }
                if(eraser){
                    e.target.style.backgroundColor = 'rgb(109, 109, 109)'
                }
                
            }
        }
    }
}

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
    eraser = false
    rainbow = false
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





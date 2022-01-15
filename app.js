const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

//Making a list with 255 numbers
const rgbList = []
for (i = 1; i<256; i++){
    rgbList.push(i)
}

const btn = document.getElementById("btn1")
const rgbBtn = document.querySelector(".rgb")
const hexBtn = document.querySelector(".hex")
const color = document.querySelector(".color")
const box = document.querySelector(".color-box")
let hex = true
let rgb = false


//Hex and Rgb buttons functions 
rgbBtn.addEventListener("click", function(){
    return rgb = true, hex = false
})
hexBtn.addEventListener("click", function(){
    return hex = true, rgb = false
})


btn.addEventListener('click', function(){
    //Getting random hex collor
    if (hex === true){
        var hexColor = "#"
        for (i = 0; i<6; i++){
            hexColor += hexList[getRandomNumber(hexList)]
        }
        color.textContent = hexColor
        box.style.backgroundColor = hexColor
    }


    //Getting random rgb collor
    if (rgb === true){
        var rgbColor = "rgb("
        for (i = 0; i<3; i++){
            rgbColor += rgbList[getRandomNumber(rgbList)]
            if (i<2){
            rgbColor += ", "
            }
            console.log(rgbColor)
        }

        rgbColor += ")"
        color.textContent = rgbColor
        box.style.backgroundColor = rgbColor
    }
})


//Random number function
function getRandomNumber(list){
    return Math.floor(Math.random() * list.length)
}

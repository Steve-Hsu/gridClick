const parentDiv = document.querySelector('.parentDiv')
const body = document.querySelector('body')
const svg = document.querySelector('svg')
const polygon1 = document.querySelector('#polygon1')
const xmlns = "http://www.w3.org/2000/svg";
let top = { x: 250, y: 0 }



const baseSquareOnClick = () => {
    alert("base, the dark Green base is clicked !")
    console.log('base')
}

const bodyOnClick = () => {
    alert("Body")
}

for (let i = 0; i < 10; i++) {
    let innerTop = {
        x: top.x,
        y: top.y
    }
    for (let ii = 0; ii < 10; ii++) {
        let right = { x: innerTop.x + 25, y: innerTop.y + 25 }
        let bottom = { x: innerTop.x, y: innerTop.y + 50 }
        let left = { x: innerTop.x - 25, y: innerTop.y + 25 }

        let topCoor = `${innerTop.x},${innerTop.y}`
        let rightCoor = `${right.x},${right.y}`
        let bottomCoor = `${bottom.x},${bottom.y}`
        let leftCoor = `${left.x},${left.y}`


        const smallSquare = document.createElementNS(xmlns, 'polygon')
        smallSquare.setAttribute('points', topCoor + ' ' + rightCoor + ' ' + bottomCoor + ' ' + leftCoor)
        smallSquare.setAttribute('style', "fill: lime; stroke: green; stroke-width: 1")

        innerTop.x -= 25
        innerTop.y += 25
        if (smallSquare.points[0].x === 275 && smallSquare.points[0].y === 75) {
            console.log(smallSquare)
            continue
        };
        svg.appendChild(smallSquare)
    }
    top.x += 25
    top.y += 25
    console.log(top)
}

const elementTop = document.createElementNS(xmlns, 'polygon')
elementTop.setAttribute('points', '250,0 300,133 ,240,88 , 190, 50 , 200, 20')
elementTop.setAttribute('style', "fill: red; stroke: green; stroke-width: 1")
elementTop.setAttribute('pointer-events', "none")

svg.appendChild(elementTop)

polygon1.addEventListener('click', baseSquareOnClick)



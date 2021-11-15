

// button functionality >> add
const container = document.querySelector('.container-padre')

let numeros = []
let colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const generaColor = () => {
    let color = "";
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 15);
        color += colorHex[num]
    }
    return color

}

let add = document.getElementById('add')
add.addEventListener('click', function () {
    pintarColor = generaColor()
    let num = (Math.floor(Math.random() * 10) + 1);
    numeros.push(num)
    console.log(numeros);

    let cuadros = `<div class= "barra" 
                    style= "background: #${pintarColor}">
                    <button class= "btnx">X</button>
                    </div>`
    container.innerHTML += cuadros

})

// button funcinality >> reset
let vaciarDIV = '';
let red = document.getElementById('contains1')
let purple = document.getElementById('contains2')
let barra = document.querySelector('.barra')

let reset = document.getElementById('reset').addEventListener('click', () => {
    container.innerHTML = vaciarDIV;
})

let btn1 = document.getElementById('btn1').addEventListener('click', () => {red.remove()})
let btn2 = document.getElementById('btn2').addEventListener('click', () => {purple.remove()})
let btn3 = document.querySelector('.btnx')
    btn3.addEventListener('click', function(){
        console.log('soy string button');
    })

// estilos a los checkbox
let button = document.querySelector('.justify')
button.addEventListener('click', function () {
    if (document.querySelector('.justify').checked) {
        document.querySelector('#butons-justify').style.display = 'block';
    } else {
        document.querySelector('#butons-justify').style.display = 'none';
    }
    if (document.querySelector('#inputJustify').checked) {
        document.querySelector('#label2').style.display = 'block'
        document.querySelector('#label1').style.display = 'none'
    } else {
        document.querySelector('#label2').style.display = 'none'
        document.querySelector('#label1').style.display = 'block'
    }
})
const button2 = document.querySelector('.align')
button2.addEventListener('click', function () {
    if (document.querySelector('.align').checked) {
        document.querySelector('.butons-align').style.display = 'block';

    } else {
        document.querySelector('.butons-align').style.display = 'none';
    }
    if (document.querySelector('#inputAlign').checked) {
        document.querySelector('#label4').style.display = 'block'
        document.querySelector('#label3').style.display = 'none'
    } else {
        document.querySelector('#label4').style.display = 'none'
        document.querySelector('#label3').style.display = 'block'
    }
})
const button3 = document.querySelector('.Fdirection')
button3.addEventListener('click', function () {
    if (document.querySelector('.Fdirection').checked) {
        document.querySelector('.butons-flex-direction').style.display = 'block';
    } else {
        document.querySelector('.butons-flex-direction').style.display = 'none';
    }
    if (document.querySelector('#inputDirection').checked) {
        document.querySelector('#label6').style.display = 'block'
        document.querySelector('#label5').style.display = 'none'
    } else {
        document.querySelector('#label6').style.display = 'none'
        document.querySelector('#label5').style.display = 'block'
    }
})
const button4 = document.querySelector('.Fwrap')
button4.addEventListener('click', function () {
    if (document.querySelector('.Fwrap').checked) {
        document.querySelector('.butons-flex-wrap').style.display = 'block';
    } else {
        document.querySelector('.butons-flex-wrap').style.display = 'none';
    }
    if (document.querySelector('#inputWrap').checked) {
        document.querySelector('#label8').style.display = 'block'
        document.querySelector('#label7').style.display = 'none'
    } else {
        document.querySelector('#label8').style.display = 'none'
        document.querySelector('#label7').style.display = 'block'
    }
})
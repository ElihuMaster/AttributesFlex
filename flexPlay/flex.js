
// button functionality >> add
const container = document.querySelector('.container-padre')

let colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let numeros = []

const generaColor = () => {
    let color = "";
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 15);
        color += colorHex[num]
    }
    return color
}

const generaID = ()=>{
    return new Date().getTime()
}

    let add = document.getElementById('add')
    add.addEventListener('click', function(){
        let pintarColor = generaColor()
        const ID = generaID()
        numeros.push(ID)
    
        
        let cuadros = `<div class="barra" id="cuadro-${ID}" 
        style= "background: #${pintarColor}">
        <button id="boton-${ID}" class='btnx'>X</button>
        </div>`
        container.innerHTML += cuadros
        addRemoveButtons()
    })
    
    function addRemoveButtons(){
        numeros.forEach(el => {
            document.getElementById(`boton-${el}`).addEventListener('click', function(){
                document.getElementById(`cuadro-${el}`).remove();
            })
        })
        
    }
    
    // button funcinality >> reset
    let vaciarDIV = '';
    let red = document.getElementById('contains1')
    let purple = document.getElementById('contains2')

    let reset = document.getElementById('reset').addEventListener('click', () => {
        container.innerHTML = vaciarDIV;
    })

    let btn1 = document.getElementById('btn1').addEventListener('click', () => { red.remove() })
    let btn2 = document.getElementById('btn2').addEventListener('click', () => { purple.remove() })


    // estilos a los checkbox
    const button = document.querySelector('.justify')
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
    // // gap
    //     documents.querySelector('.input-gap').innerHTML = container.classList.add('gap')
    
    // buttons justify-content
    const start = document.getElementById('start').addEventListener('click', () => {
        document.getElementById('justif').innerHTML = `<p>&nbsp &nbsp justify-content: flex-start</p>`
        container.classList.add('justify-start')
        container.classList.remove('justify-between')
        container.classList.remove('justify-around')
        container.classList.remove('justify-evenly')
        container.classList.remove('justify-center')
        container.classList.remove('justify-end')
    })
    const between = document.getElementById('between').addEventListener('click', () => {
        document.getElementById('justif').innerHTML = `<p>&nbsp &nbsp justify-content: space-between</p>`
        container.classList.add('justify-between')
        container.classList.remove('justify-start')
        container.classList.remove('justify-around')
        container.classList.remove('justify-evenly')
        container.classList.remove('justify-center')
        container.classList.remove('justify-end')
    })
    const around = document.getElementById('around').addEventListener('click', () => {
        document.getElementById('justif').innerHTML = `<p>&nbsp &nbsp justify-content: space-around</p>`
        container.classList.add('justify-around')
        container.classList.remove('justify-between')
        container.classList.remove('justify-start')
        container.classList.remove('justify-evenly')
        container.classList.remove('justify-center')
        container.classList.remove('justify-end')
    })
    const evenly = document.getElementById('evenly').addEventListener('click', () => {
        document.getElementById('justif').innerHTML = `<p>&nbsp &nbsp justify-content: space-evenly</p>`
        container.classList.add('justify-evenly')
        container.classList.remove('justify-between')
        container.classList.remove('justify-start')
        container.classList.remove('justify-around')
        container.classList.remove('justify-center')
        container.classList.remove('justify-end')
    })
    const center = document.getElementById('center').addEventListener('click', () => {
        document.getElementById('justif').innerHTML = `<p>&nbsp &nbsp justify-content: center</p>`
        container.classList.add('justify-center')
        container.classList.remove('justify-between')
        container.classList.remove('justify-start')
        container.classList.remove('justify-around')
        container.classList.remove('justify-evenly')
        container.classList.remove('justify-end')
    })
    const end = document.getElementById('end').addEventListener('click', () => {
        document.getElementById('justif').innerHTML = `<p>&nbsp &nbsp justify-content: flex-end</p>`
        container.classList.add('justify-end')
        container.classList.remove('justify-between')
        container.classList.remove('justify-start')
        container.classList.remove('justify-around')
        container.classList.remove('justify-evenly')
        container.classList.remove('justify-center')
    })

    // button align items
    const Astart = document.getElementById('a-start').addEventListener('click', () => {
        document.getElementById('alig').innerHTML = `<p>&nbsp &nbsp aling-items: flex-start</p>`
        container.classList.add('align-flex-start')
        container.classList.remove('align-center')
        container.classList.remove('align-flex-end')
    })

    const Acenter = document.getElementById('a-center').addEventListener('click', () => {
        document.getElementById('alig').innerHTML = `<p>&nbsp &nbsp aling-items: center</p>`
        container.classList.add('align-center')
        container.classList.remove('align-flex-start')
        container.classList.remove('align-flex-end')
    })

    const Aend = document.getElementById('a-end').addEventListener('click', () => {
        document.getElementById('alig').innerHTML = `<p>&nbsp &nbsp aling-items: flex-end</p>`
        container.classList.add('align-flex-end')
        container.classList.remove('align-flex-start')
        container.classList.remove('align-center')
    })

    // button flex direccion
    const Frow = document.getElementById('row').addEventListener('click', () => {
        document.getElementById('fdir').innerHTML = `<p>&nbsp &nbsp flex-direction: row</p>`
        container.classList.add('row')
        container.classList.remove('column')
        container.classList.remove('row-reverse')
        container.classList.remove('column-reverse')
    })
    const Fcolumn = document.getElementById('column').addEventListener('click', () => {
        document.getElementById('fdir').innerHTML = `<p>&nbsp &nbsp flex-direction: column</p>`
        container.classList.add('column')
        container.classList.remove('row')
        container.classList.remove('row-reverse')
        container.classList.remove('column-reverse')
    })
    const Freverse = document.getElementById('row-reverse').addEventListener('click', () => {
        document.getElementById('fdir').innerHTML = `<p>&nbsp &nbsp flex-direction: row-reverse</p>`
        container.classList.add('row-reverse')
        container.classList.remove('column-reverse')
        container.classList.remove('row')
        container.classList.remove('column')
    })
    const column = document.getElementById('column-reverse').addEventListener('click', () => {
        document.getElementById('fdir').innerHTML = `<p>&nbsp &nbsp flex-direction: column-reverse</p>`
        container.classList.add('column-reverse')
        container.classList.remove('row-reverse')
        container.classList.remove('row')
        container.classList.remove('column')
    })

    // botones flex-wrap
    const wrap = document.getElementById('wrap').addEventListener('click', () => {
        document.getElementById('fwr').innerHTML = `<p>&nbsp &nbsp flex-wrap: wrap</p>`
        container.classList.add('wrap')
        container.classList.remove('nowrap')
        container.classList.remove('wrap-reverse')
    })
    const nowrap = document.getElementById('nowrap').addEventListener('click', () => {
        document.getElementById('fwr').innerHTML = `<p>&nbsp &nbsp flex-wrap: nowrap</p>`
        container.classList.add('nowrap')
        container.classList.remove('wrap-reverse')
        container.classList.remove('wrap')
    })
    const wrapREverse = document.getElementById('wrap-reverse').addEventListener('click', () => {
        document.getElementById('fwr').innerHTML = `<p>&nbsp &nbsp flex-wrap: wrap-reverse</p>`
        container.classList.add('wrap-reverse')
        container.classList.remove('wrap')
        container.classList.remove('nowrap')
    })
//     let container = document.querySelector('.containerPadre');
// let li = document.querySelectorAll('li');

// li.forEach(el => {
//     el.addEventListener('click', function(){
//         container.querySelector('.active').classList.
//                 remove('active');

//         el.classList.add('active');
//     });
// });

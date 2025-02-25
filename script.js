
//1 papir, 2 kamen, 3 makaze


function NadjiBrojeveIzmedju(a,b) {
    return Math.floor(Math.random() * (b-a + 1)) + a
}

igrac = 0


let zaprikazivanje = document.querySelector('.textzaprikazivanje')
let papirdugme = document.querySelector('.papir')
let kamendugme = document.querySelector('.kamen')
let makazedugme = document.querySelector('.makaze')
let text2 = document.querySelector('.text2')

papirdugme.addEventListener('click', function() {
    igra(1)
})
kamendugme.addEventListener('click', function() {
    igra(2)
})
makazedugme.addEventListener('click', function() {
    igra(3)
})

function igra(broj) {
 bot = NadjiBrojeveIzmedju(1,3)
 lokigazaigraca = broj === 1 && bot === 2 || broj === 2 && bot === 3 || broj === 3 && bot === 1
 logikakazabota = bot === 1 && broj === 2 || bot === 2 && broj === 3 || bot === 3 && broj === 1
 logikazanereseno = bot === 1 && broj === 1 || bot === 2 && broj === 2 || bot === 3 && broj === 3
if (lokigazaigraca) {
     zaprikazivanje.textContent = 'Pobedio si '
    console.log(broj,bot)
}

if (logikakazabota) {
     zaprikazivanje.textContent = 'Izgubio si '
    console.log(broj,bot)
}
if (logikazanereseno) {
     zaprikazivanje.textContent = 'Nereseno!  '
    console.log(broj,bot)
}
if(bot === 1) {
    text2.textContent = ' Kompijuter je izabrao papir'
}
if(bot === 2) {
    text2.textContent = ' Kompijuter je izabrao kamen'
}
if(bot === 3) {
    text2.textContent = ' Kompijuter je izabrao makaze'
}


}

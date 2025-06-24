let userChoice = ""
let computerChoice = ""
let choixAlea = ['pierre', 'feuille', 'ciseaux']

let countUser = 0
let countComputer = 0

function attribuerChoix(choix) {
    // console.log('ok')

    userChoice = choix
    iaChoice()

    // console.log(userChoice, computerChoice)




    if (userChoice == 'pierre' && computerChoice == 'pierre') {
        message = 'Egalité'
    } else if (userChoice == 'pierre' && computerChoice == 'feuille') {
        message = 'Perdu'
        countComputer++
    } else if (userChoice == 'pierre' && computerChoice == 'ciseaux') {
        message = 'Gagné'
        countUser++
    } else if (userChoice == 'ciseaux' && computerChoice == 'ciseaux') {
        message = 'Egalité'
    } else if (userChoice == 'ciseaux' && computerChoice == 'pierre') {
        message = 'Perdu'
        countComputer++
    } else if (userChoice == 'ciseaux' && computerChoice == 'feuille') {
        message = 'Gagné'
        countUser++
    } else if (userChoice == 'feuille' && computerChoice == 'feuille') {
        message = 'Egalité'
    } else if (userChoice == 'feuille' && computerChoice == 'ciseaux') {
        message = 'Perdu'
        countComputer++
    } else if (userChoice == 'feuille' && computerChoice == 'pierre') {
        message = 'Gagné'
        countUser++

    }

    document.getElementById('message').innerText = message
    document.getElementById('player').innerText = "Joueur : " + userChoice
    document.getElementById('computer').innerText = "PC : " + computerChoice
    document.getElementById('userCount').innerText = countUser
    document.getElementById('computerCount').innerText = countComputer

}

function iaChoice() {
    let nombre = Math.floor(Math.random() * 3);
    computerChoice = choixAlea[nombre]
}


function girarDado() {

    let numeroSorteado = Math.floor(Math.random() * 6) + 1;

    return "🎲 Você tirou o número: " + numeroSorteado;
}

console.log(girarDado());
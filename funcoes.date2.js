function saudacao() {
    let hora = new Date().getHours();

    if (hora < 12) {
        return "Bom dia!";
    } else {
        return "Boa tarde!";
    }
}

console.log(saudacao());
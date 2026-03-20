function formatarPerfil(nomeUsuario) {
    let nomeLimpo = nomeUsuario.trim();
    let totalLetras = nomeLimpo.length;
    let grito = nomeLimpo.toUpperCase();

    return "Usuário: " + grito + " | Caracteres: " + totalLetras;
}

console.log(formatarPerfil(" fabiano "));
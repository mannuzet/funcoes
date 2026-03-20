function verificarLojaAberta() {
   let agora = new Date();
   let horaAtual = agora.getHours;
   
   if (horaAtual >= 8 && horaAtual < 18){
    return "We're OPEN! Welcome in";
   } else{
    return "We're CLOSED! Come back tomorrow at 8am"
   }
}
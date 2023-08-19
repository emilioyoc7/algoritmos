function confirmar(str, target) {
    return str.slice(str.length - target.length) === target;
}



console.log(confirmar("hola me llamo emilio", "emilio"))
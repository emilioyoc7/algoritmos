function repeatStringNumTimes(str, num) {
    let cadenaRepetida = ""
    for(let i = 0; i < num; i++) {
        cadenaRepetida += str
    }    
    return cadenaRepetida
}

console.log(repeatStringNumTimes("abc", 3))
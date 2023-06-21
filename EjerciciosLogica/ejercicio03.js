function countNameRepetitions(names) {
    let NameNoRept = []
    names.forEach(nombre => {
        if (!NameNoRept.includes(nombre)){
            NameNoRept.push(nombre)
        }
    });
    for (let i = 0; i < NameNoRept.length; i++){
    let nombre = NameNoRept[i]
    let contador = ""
    for (let j = 0; j < names.length; j++){
      if (nombre === names[j]){
        contador = contador + "*"
      }
      
    }
    console.log(nombre + ": " + contador)
    }
}
const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María']
countNameRepetitions (nombres)

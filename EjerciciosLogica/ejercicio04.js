function fizzBuzz(n) {
    if (typeof n === "number"){
        for (let i = 1; i <= n; i++){
            let a = i%3
            let b = i%5
            if (a === 0 && b === 0){
                console.log("FizzBuzz")
            } else if (a === 0 ){
                console.log("Fizz")
            } else if (b === 0){
                console.log("Buzz")
            } else {
                console.log(i)
            }
        }    
    } else{
        console.log("Debe de ingresar un numero entero")
    }
}

fizzBuzz(15)
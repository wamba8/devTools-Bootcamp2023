function next_pal(numero) {
    let inicial = numero + 1
    let new_pal = 0

    for (let i = inicial; new_pal === 0; i++) {
        let A = i.toString()
        let B = []
        for (let j = A.length; j > 0 ; j--) {
            let C = A[j-1]
            B.push(C)
        }
        let num_alr = B.join("")
        let C = num_alr
        if (A === C) {
            new_pal = C;
        } else {
            new_pal = 0
        }
    }

    console.log(new_pal)
}

next_pal(200)
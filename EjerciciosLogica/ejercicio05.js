function drawX(size){
    if (typeof size === "number"){
          for (let i = 0; i < size; i++){
            let X = ""
            for (let j = 0; j < size; j++){
                let h = j+1
                let f = size-h
                if(i===j || i===f){
                    X = X + "*"
                } else {
                    X = X + " "
                }
            }
          console.log(X)
          } 
    }
}

drawX(7)
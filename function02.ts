function getPrimeNumbers(){

    const x: Array<number> = []
    for(let i=0;i<=100;i++){
        if(i%2==0){
            x.push(i)
        }
    }
    return x 
}
const result = getPrimeNumbers()
console.log(result)
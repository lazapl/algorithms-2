/* 1. mergesort

let tablica1:number[] = [2,3,7,9,10]

let tablica2:number[] = [1,3,4,8,11]

let mergesort:number[] = []


let reran = tablica1.concat(tablica2)
console.log(reran.sort((a,b) => a - b))

--------------------------------------------------*/


/* 2. bubble Sort


let arrays:number[] = [13,32,26,35,10]

let sorted:number[] = []

for(let i=0; i<=arrays.length; i++){
    for(let j=0; j<arrays.length -1; j++){
        if(arrays[j] > arrays[j + 1]){

            let swap = arrays[j]
            arrays[j] = arrays[j + 1]
            arrays[j + 1] = swap

        }
    }
    
}
console.log(arrays)


-------------------------------------------------------------*/


/*3. highest number in array

let arrays: number[] = [1,2,3]
let max = arrays[0]

for(let i:number = 0; i<=arrays.length; i++){
    if(arrays[i] > max){
        max = arrays[i]
    }
}
console.log(max)

----------------------------------------------*/

/* 4. Silnia

let n:number = 5
let result:number = 1
for(let i:number = 1; i<=n; i++){
    result *= i
}
console.log(result)

------------------------*/




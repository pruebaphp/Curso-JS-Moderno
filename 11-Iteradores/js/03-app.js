//Fizz Buzz


for(let i=0; i<100; i++){
    if(i%3 ===0 && i!=0){
        console.log(`El número ${i}: fizz`);
    }

    if(i%5===0){
        console.log(`El número ${i}: buzz`);
    }

    if(i%15===0){
        console.log(`El número ${i}: FIZZBUZZ!`);
    }
}
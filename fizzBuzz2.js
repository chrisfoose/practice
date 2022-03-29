// my version

let i;

for (i = 1; i <= 100; i++) {

    //check if divisible by 15
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {  //check if divisible by 3
        console.log('Fizz');
    } else if (i % 5 === 0) {  //check if divisible by 5
        console.log('Buzz');
    } else {                    // just print the number
        console.log(i);
    }
    
};
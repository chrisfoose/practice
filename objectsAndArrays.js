const arr1 = [45, 'neon', false, 'happy', 'dog'];
const arr2 = ['whale', 'comet', 66, true,'66',];

console.log(arr1.length);
console.log(arr2.length);

arr1.forEach(x => console.log(x));
arr2.forEach(y => console.log(y));

const meObj = {
    firstName: 'Chris',
    lastName: 'Foose',
    age: 700,
    doThis : () => {
        console.log('I am executing.');
    },
};

console.log(meObj);
meObj.doThis();
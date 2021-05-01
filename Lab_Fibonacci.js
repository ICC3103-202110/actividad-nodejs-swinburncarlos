function fibonacci_number(number){
    if(number == 0){
        return number;
    }
    else if (number == 1){
        return number;
    }
    else{
        var sequence = fibonacci_number(number-2)+fibonacci_number(number-1);
    }
    return sequence;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter a positional number of the fibonacci sequence ', number => {
    console.log(`The position ${number} of the fibonacci sequence is ${fibonacci_number(number)}`);
    readline.close();
});
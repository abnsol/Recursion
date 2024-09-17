//iterative approach
function fibs (n) {
    let a = 0, b = 1;

    if (n < 0) return 'invalid input';
    if (n < 2) return n;

    for (let i = 2; i <= n; i++){
        let temp = b;
        b += a;
        a = temp;
    }return b;
}

// recursive approach
const fibsRec = (n) => {
    if (n < 0) return 'invalid input';
    if (n < 2) return n;
    return fibsRec(n - 2) + fibsRec(n - 1);
}

//testing
console.log(fibs(10));
console.log(fibsRec(10));

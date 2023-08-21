function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    if (b === 1) {
        return a;
    }
    return a + multiply(a, b - 1);
}

console.log(multiply(3, 4));

// Time complexity - O(n);
// Space complexity - O(n)
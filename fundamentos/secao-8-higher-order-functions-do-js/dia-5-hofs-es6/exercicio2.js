const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(sum(4,5,6));
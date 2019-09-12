const a = () => console.log('A');

const slowFunction = callback => callback();

slowFunction(a);

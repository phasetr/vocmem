export function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function isEven(x: number) {
  return (x % 2 === 0);
}

export function isOdd(x: number) {
  return (x % 2 === 1);
}

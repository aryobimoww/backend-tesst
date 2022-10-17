// * Expected Result:
// * {
// *  a: 4,
// *  b: 2
// * }
// */
let numbers = {
  a: 2,
  b: 4,
};

function result(numbers) {
  let a = numbers.a;
  let b = numbers.b;
  a = a - b;
  b = b + a;
  a = b - a;
  return { a, b };
}

console.log(result(numbers));

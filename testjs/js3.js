/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: "Adi", lastName: "Nugroho", age: 25 },
  { firstName: "Deddy", lastName: "Dores", age: 25 },
];

function result(data) {
  const field = [];
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].firstName !== data[j].firstName) {
        field.push("firstname");
      }
      if (data[i].lastName !== data[j].lastName) {
        field.push("lastName");
      }
      if (data[i].age !== data[j].age) {
        field.push("age");
      }
    }
  }
  return field;
}

console.log(result(data));

// reduce
console.log('reduce()');
// reduce(redFn, initial value);

//function redFn(accumulator, currentValue, currentIndex, arr)

const inputs3 = [2, 3, 4, 5, 6, 10];

const sum3 = inputs3.reduce((total, num, index) => {
  console.log(total, index);
  return total + num;
});

console.log(sum3);


function mapContactsToCompanies(contacts) {
  return contacts.reduce(function (obj, contact) {
    if (obj[contact.company] == undefined) obj[contact.company] = [];
    obj[contact.company].push(contact.name);
    return obj;
  }, {});
}
const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];


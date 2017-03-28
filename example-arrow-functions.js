var names = ['Rent', 'Jane', 'Helen',];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
// console.log('arrowFunc', name)
//
// });
//
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Rent'));

// var person = {
//   name: 'Rent',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}
//addStatement "{}"
var addStatement = (a, b) => {
  return (a + b);
}
console.log(addStatement(12, 8));
console.log(addStatement(4, 1));

//addExpresssion
var addExpresssion = (c, d) => c + d;
console.log(addExpresssion(1, 8));

// console.log(add(1,3));
// console.log(add(9,0));

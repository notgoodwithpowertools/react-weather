var names = ['Andrew', 'Dean', 'Sean', 'Sue'];

names.forEach(function (name){
  console.log('foreach ... ', name);
});

names.forEach((names) => {
  console.log("arrow...", names );
  console.log("---");
});

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

var person = {

  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi' + name);

    })
  }
};

person.greet();

function add (a, b) {

  return (a+b);

}

var addStatement = (a,b) => {
  return (a+b);
}

console.log(add(1,3));
console.log(add(9,5));
console.log("Add Statement", addStatement(7,8));

var addExpression = (a,b) => (a+b);
console.log("Expression", addExpression(76,8));

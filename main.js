// Your code here.

const getFirstName = function(name){
  return name.firstName;
}

const getLastName = function(name){
  return name.lastName;
}

const getFullName = function(name){
  return name.firstName + ' ' + name.lastName;
}


const setFirstName = function(name, value){
  let firstName = 'Francis';  
  name.firstName = 'Bob'; 
}
// let result = setFirstName('Anthony');
// result;


const setAge = function(myObject, age){
  myObject.age
}
// let result2 = setAge(myObject, age);

const giveBirthday = function(firstName, lastName, age){
  age = age + 1
}
// let finalAge = giveBirthday(firstName, lastname, 30);

const marry = function(person1, person2){
  if (person1.married === person2.married)
    return true;
}

const divorce = function(person){
  delete person.spouseName;
}











// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

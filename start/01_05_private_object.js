// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Sara",
  [password] : "kkaa",
    age: 22
}
console.log(user.username)
console.log(user.password)
console.log(user[password])
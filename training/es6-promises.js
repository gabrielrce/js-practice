/*Senior type questions:
    1. Implement ES6 features to the object.
    2. Return the value after 2s.

var john = {
  name: "John Doe",
  balance: 1500,
  deduct: function (amount) {
    this.balance = this.balance - amount;
    return this.name + " has a balance of " + this.balance;
  },
};

console.log(john.deduct(200));
*/
//const for not wanting another dev to reasign our object to another obj.
const john = {
  name: "John Doe",
  balance: 1500,
  deduct(amount) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.balance = this.balance - amount;
        res(`${this.name} has a balance of ${this.balance}`);
      }, 2000);
    });
  },
};

john.deduct(200).then((message) => console.log(message));

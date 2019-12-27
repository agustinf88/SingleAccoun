class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.movements = [];
  }

  addMovement(movement) {
    this.movements = [movement, ...this.movements];
    return movement;
  }
}

module.exports = Account;

const Account = require("../model/Account");

const account = new Account("Some Name", 100);

const getAccount = () => Promise.resolve(account);
const addMovement = movement => {
  account.balance = account.balance + movement.value;
  account.addMovement(movement);

  return Promise.resolve(movement);
};

module.exports = { getAccount, addMovement };

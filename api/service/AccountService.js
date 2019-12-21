const AccountRepository = require("../repository/AccountRepository");
const Movement = require("../model/Movement");

const getAccount = () => AccountRepository.getAccount();

const addMovement = value => {
  return AccountRepository.getAccount().then(account => {
    const diff = account.balance + value;
    if (diff > 0) {
      const movement = new Movement(value);
      return AccountRepository.addMovement(movement);
    } else {
      return Promise.reject({ code: 403, description: "Can't add movement" });
    }
  });
};

module.exports = { getAccount, addMovement };

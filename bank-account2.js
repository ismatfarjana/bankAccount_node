const accounts = [];
//Account object needs balance and user name

//create account(account)
//push into array of accounts
//return account

const createAccount = account => {
  accounts.push(account);
  return account;
};

//getAccount(userName)
//find matching account using forEach
const getAccount = userName => {
  let matchedAccount;
  accounts.forEach(account => {
    if (account.userName === userName) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
};

//deposite
const deposite = (account, amount) => {
  account.balance = account.balance + amount;
};

//withdraw
const withdraw = (account, amount) => {
  account.balance = account.balance - amount;
};

//getBalance
const getBalance = (account, amount) => {
  return account.balance;
};

//try out

const syedasAccount = createAccount({
  userName: "Syeda",
  balance: 0
});

deposite(syedasAccount, 1000);
console.log(`SYEDA YOU GOT $ ${getBalance(syedasAccount)}`);
withdraw(syedasAccount, 200);
console.log(`WITHDRAW OF $ ${getBalance(syedasAccount)} IS SUCCESFUL`);

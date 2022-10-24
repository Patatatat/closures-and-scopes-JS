// function myMoneyBox(coins){
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// myMoneyBox(5);
// myMoneyBox(5);

function MoneyBox(){
  let saveCoins = 0;
  function countCoins(coins){
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = MoneyBox();

myMoneyBox(5);
myMoneyBox(5);
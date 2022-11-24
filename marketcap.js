document.querySelector(".check").addEventListener("click", function () {
  const totalTokens = Number(document.querySelector(".Totaltoken").value);

  const totalSupply = Number(document.querySelector(".Totalsupply").value);

  const bnb = Number(document.querySelector(".Bnb").value);
  let pricePerToken = 1 / totalTokens;
  let TotalMarketCap;
  TotalMarketCap = pricePerToken * totalSupply * bnb;

  if (TotalMarketCap > 0) {
    document.querySelector(
      ".Totalmarketcap"
    ).textContent = `Total Markek Cap = ${TotalMarketCap} `;
    document.querySelector(".Totalmarketcap").style.backgroundColor = "#dff20d";
    document.querySelector("body").style.backgroundColor = "#dbf8ac";
  }
});

// let totalTokens;
// let totalSupply;
// let bnb;

// function calculator(totalTokens, totalSupply, bnb) {
//   let pricePerToken = 1 / totalTokens;
//   return pricePerToken * totalSupply * bnb;
// }

// let mCap = calculator(144000, 200000000, 296);
// console.log(mCap);

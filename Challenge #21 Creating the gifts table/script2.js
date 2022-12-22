function printTable(gifts) {

  let a = gifts.map((a)=>a.name.length);

  a


 let findMaxGiftLength1 = Math.max(...gifts.map((a)=>a.name.length))

 findMaxGiftLength1
  
  let findMaxGiftLength = gifts.reduce(
    (prev, curr) => {
      return prev.name.length >= curr.name.length ? prev : curr;
    },
    { name: "xxxx" }
  ).name.length;

  let findMaxQtyLength = gifts
    .reduce(
      (prev, curr) => {
        return prev.quantity.toString().length >=
          curr.quantity.toString().length
          ? prev
          : curr;
      },
      { quantity: "11111111" }
    )
    .quantity.toString().length;

  const buildPattern = (pattern, size) => pattern.repeat(size);

  const buildHeader = () => {
    let giftHeader = "| " + "Gift" + buildPattern(" ", findMaxGiftLength - 3);
    let giftBottom = "| " + buildPattern("-", findMaxGiftLength) + " | ";

    let qtyHeader =
      "| " +
      `Quantity ${" ".repeat(
        findMaxQtyLength > 8 ? findMaxQtyLength - 8 : 0
      )}|` +
      "\n";
    let qtyBottom =
      buildPattern("-", findMaxQtyLength > 8 ? findMaxQtyLength : 8) +
      " |" +
      "\n";

    let header = giftHeader + qtyHeader;
    let bottomHeader = giftBottom + qtyBottom;

    return header + bottomHeader;
  };

  const bulidBody = () => {
    let body = "";

    for (let index = 0; index < gifts.length; index++) {
      body +=
        "| " +
        gifts[index].name +
        buildPattern(
          " ",
          findMaxGiftLength <= gifts[index].name.length
            ? 0
            : findMaxGiftLength - gifts[index].name.length
        ) +
        " | " +
        gifts[index].quantity +
        buildPattern(
          " ",
          findMaxQtyLength <= gifts[index].quantity.toString().length
            ? gifts[index].quantity.toString().length - findMaxQtyLength
            : findMaxQtyLength - gifts[index].quantity.toString().length
        ) +
        " |" +
        "\n";
    }

    return body;
  };

  let header = buildHeader(findMaxGiftLength, findMaxQtyLength);

  return (
    "+".repeat((header.length - 1) / 2) +
    "\n" +
    buildHeader() +
    bulidBody() +
    "*".repeat((header.length - 1) / 2)
  );
}

console.log(
  printTable([
    { name: "PlayStation 5", quantity: 9234782374892 },
    { name: "Book Learn Web Dev", quantity: 23531 },
  ])
);

// printTable(

//   { name: 'PlayStation 5', quantity: 9234782374892 },
//   { name: 'Book Learn Web Dev', quantity: 23531 }
// ])

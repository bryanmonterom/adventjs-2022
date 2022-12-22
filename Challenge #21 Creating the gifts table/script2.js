function printTable(gifts) {
  let findMaxGiftLength = Math.max(
    ...[Math.max(...gifts.map((a) => a.name.length)), 4]
  );

  let findMaxQtyLength = Math.max(
    ...[Math.max(...gifts.map((a) => a.quantity.toString().length)), 8]
  );

  const buildPattern = (pattern, size) => pattern.repeat(size);

  const buildHeader = () => {
    let giftHeader = "| " + "Gift" + buildPattern(" ", findMaxGiftLength - 3);
    let giftBottom = "| " + buildPattern("-", findMaxGiftLength) + " | ";

    let qtyHeader =
      "| " + "Quantity" + buildPattern(" ", findMaxQtyLength - 7) + "|" + "\n";
    let qtyBottom = buildPattern("-", findMaxQtyLength) + " |" + "\n";

    let header = giftHeader + qtyHeader;
    let bottomHeader = giftBottom + qtyBottom;

    return header + bottomHeader;
  };

  const bulidBody = () => {
    let body = "";

    gifts.forEach(element => {
      body +=
        "| " +
        element.name +
        buildPattern(" ", findMaxGiftLength - element.name.length) +
        " | " +
        element.quantity +
        buildPattern(
          " ",
          findMaxQtyLength - element.quantity.toString().length
        ) +
        " |" +
        "\n";
    });

    // for (let index = 0; index < gifts.length; index++) {
    //   body +=
    //     "| " +
    //     gifts[index].name +
    //     buildPattern(" ", findMaxGiftLength - gifts[index].name.length) +
    //     " | " +
    //     gifts[index].quantity +
    //     buildPattern(
    //       " ",
    //       findMaxQtyLength - gifts[index].quantity.toString().length
    //     ) +
    //     " |" +
    //     "\n";
    // }

    return body;
  };

  let header = buildHeader(findMaxGiftLength, findMaxQtyLength);

  return (
    "+".repeat((header.length - 1) / 2) +
    "\n" +
    header +
    bulidBody() +
    "*".repeat((header.length - 1) / 2)
  );

}

console.log(
  printTable([
    { name: "Plaaaaaaaaaaaaa", quantity: 374892 },
    { name: "ok", quantity: 23531 },
  ])
);

// printTable(

//   { name: 'PlayStation 5', quantity: 9234782374892 },
//   { name: 'Book Learn Web Dev', quantity: 23531 }
// ])

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
  printTable(([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Bike', quantity: 1 },
    { name: 'Bike', quantity: 1 },
    { name: 'Bike', quantity: 1 },
    { name: 'Bike', quantity: 222222222222222221 },
    { name: 'BikeBikeBikeBikeBike', quantity: 1 },
    { name: 'Bike BikeBikeBikeBikeBikeBikeBikeBike', quantity: 1 },

    { name: 'Book', quantity: 3 }
  ]
)));

// printTable(

//   { name: 'PlayStation 5', quantity: 9234782374892 },
//   { name: 'Book Learn Web Dev', quantity: 23531 }
// ])

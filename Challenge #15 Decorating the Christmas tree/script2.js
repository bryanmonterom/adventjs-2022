function decorateTree(base) {
  const dictionary = {
    PP: "P ",
    BB: "B ",
    RR: "R ",
    BP: "R ",
    PB: "R ",
    RP: "B ",
    PR: "B ",
    BR: "P ",
    RB: "P ",
  };

  const baseSplitter = (base) => base.split("").filter((item) => item != " ");

  let baseLength = baseSplitter(base).length;
  let tree = [];
  tree.push(base);

  const findCombinations = (base, n) => {
    if (n == baseLength - 1) {
      return tree;
    }
    let currentBase = baseSplitter(base);
    let newBase = "";

    for (let i = 0; i < currentBase.length - 1; i++) {
      let combination = currentBase[i] + currentBase[i + 1];
      newBase += dictionary[combination];
    }
    tree.push(newBase.trimEnd());
    findCombinations(newBase, n + 1);
  };

  findCombinations(base, 0);
  let reverse = tree.reverse();
  return reverse;
}

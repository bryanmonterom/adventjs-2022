function carryGifts(gifts, maxWeight) {
  let bag = [];
  let packagingGift = "";

  let doesPackageFit = gifts.every((item) => item.length <= maxWeight);

  doesPackageFit;

  if (!doesPackageFit) {
    return [];
  }

  for (let index = 0; index < gifts.length; index++) {
    if (
      packagingGift.replace(/\s/g, "").length + gifts[index].length <=
      maxWeight
    ) {
      packagingGift += gifts[index] + " ";

      if (index == gifts.length - 1) {
        bag.push(packagingGift.trimEnd());
      }
    } else {
      bag.push(packagingGift.trimEnd());
      packagingGift = "";
      packagingGift += gifts[index] + " ";
      if (index == gifts.length - 1) {
        bag.push(packagingGift.trimEnd());
      }
    }
  }
  return bag;
}

console.log(carryGifts(["toy", "toy", "toy", "toy"], 2));

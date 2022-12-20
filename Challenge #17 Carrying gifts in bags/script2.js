  function carryGifts(gifts, maxWeight) {
    let bag = [];
    let packagingGift = "";

    let doesPackageFit = gifts.every((item) => item.length <= maxWeight);

    if (!doesPackageFit) {
      return [];
    }

    const verifyFit = (n) => {
      if (n == gifts.length) {
        return bag;
      }
  

      if (
        packagingGift.replace(/\s/g, "").length + gifts[n].length <=
        maxWeight
      ) {
        packagingGift += gifts[n] + " ";

        if (n == gifts.length - 1) {
            bag.push(packagingGift.trimEnd());
          }
        verifyFit(n + 1);
      } else {
        bag.push(packagingGift.trimEnd());
        packagingGift = "";
        packagingGift += gifts[n] + " ";
        if (n == gifts.length - 1) {
          bag.push(packagingGift.trimEnd());
        }
        verifyFit(n + 1);
      }
    };

    verifyFit(0);

    return bag;
  }

  console.log(carryGifts(["game", "bike", "book", "toy"], 10));

function getMaxGifts(giftsCities, maxGifts, maxCities) { 

  const getGiftCount = (giftsCities, maxGifts, 
    maxCities,i=0,
    giftCount =0,
    cityCount =0)=>{

      if(cityCount === maxCities ||
        i === giftsCities.length){
          return giftCount
        }

        if(giftCount+giftsCities[i] <=maxGifts){
          return Math.max(
            getGiftCount(giftsCities, maxGifts,maxCities,
              i++, giftCount+giftsCities[i],
              cityCount++),
              getGiftCount(giftsCities, maxGifts
                ,maxCities,i++,giftCount, cityCount)
          )
        }
    }


    return getGiftCount(giftsCities, maxGifts,
      maxCities)

      return getGiftCount(giftsCities, maxGifts
                ,maxCities,i++,giftCount, cityCount)


}

console.log(
  getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4))
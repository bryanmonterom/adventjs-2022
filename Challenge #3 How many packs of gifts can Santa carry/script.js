function distributeGifts(packOfGifts, reindeers) {

    // let giftWeight = packOfGifts.reduce(function(accumulator,currentValue){
    //   return accumulator +=currentValue.length
    // },0)
    
    // let reindeersWeightLimit = reindeers.reduce(function(accumulator,currentValue){
    //   return accumulator +=currentValue.length*2
    // },0)
    
    // return Math.floor(reindeersWeightLimit/giftWeight)
    return Math.floor(reindeers
      .join('')
      .length*2/packOfGifts
      .join('').length)
  
    }
    
    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]
    console.log(distributeGifts(packOfGifts, reindeers))
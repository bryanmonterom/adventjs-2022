function countTime(leds) {
  let count = 0;
  let newarray = leds

  // const countRecursive = (newArray)=>{
  //   // if(newArray.filter((item)=> item ==0).length===0){
  //   //   return count
  //   // }

  //   if(!newArray.some((item)=> item ==0)){
  //       return count
  //     }

  //   newarray = leds.map((element,i)=>{
  //     return element == 0 && newarray.at(i-1)==1  ? 1 : element
  // })
  // count++
  // countRecursive(newarray)
  // return count
  // }
  while  (newarray.some((item)=> item ===0)){
       newarray = newarray.map((element,i)=>{
          return element == 0 && newarray.at(i-1)==1  ? 1 : element
      })
      count++
  }
 
  return count*7
  }

  const leds = [0, 1, 1, 0, 1]
  console.log(countTime(leds)) // 7
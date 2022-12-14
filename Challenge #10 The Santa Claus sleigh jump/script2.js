function checkJump(heights) {
 
  let maxIndex = heights.indexOf(Math.max(...heights))
  
 let isMaxPointOnTheMid = ![0,heights.length -1].includes(maxIndex)



 let leftSide = heights.slice(0, maxIndex);
 let rightSide = heights.slice(maxIndex, heights.length)
  
  const isAscending = leftSide.slice(1).every((item, index)=>item >= leftSide[index])
  const isDescending = rightSide.slice(1).every((item, index)=>item <= rightSide[index])

  return isMaxPointOnTheMid && isAscending && isDescending

}
function sortToys(toys, positions) {
  //Create empty array
  let sorted =Array(toys.length)

  // Find the min of the array
  let min = Math.min(...positions)

  //Create new array with positions 0 based
  let newPostions = positions.map((value)=>value-min)
  positions
  newPostions

  for (let i = 0; i < toys.length; i++) {
    let position = newPostions[i]
    let toy = toys[i]
  //Add item in the its final position directly

    sorted.splice(position,1,toy)    
  }
 return sorted
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [8, 6, 5, 7, 9]


console.log(sortToys(toys, positions))

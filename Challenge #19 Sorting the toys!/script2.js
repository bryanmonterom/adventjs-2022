function sortToys(toys, positions) {
  let sorted =Array(toys.length)

  let min = Math.min(...positions)

  let newPostions = positions.map((value)=>value-min)

  for (let i = 0; i < toys.length; i++) {
    let position = newPostions[i]
    let toy = toys[i]
    sorted.splice(position,1,toy)    
  }
 return sorted
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [8, 6, 5, 7, 9]


console.log(sortToys(toys, positions))

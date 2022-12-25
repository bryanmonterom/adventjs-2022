function getOptimalPath(path) {



  const findNextLevel = (level,n,acc) =>{
    if(n== path.length-1){
      acc += Math.min(...level)
      return acc
    }

    let currentLevel = level
    currentLevel

    let min = Math.min(...currentLevel)
    min

    let indexOf = level.indexOf(min);

    indexOf
    acc += min

    let test2 = path[n+1].slice(0,2)
    test2
    
    let right = findNextLevel(indexOf == 0? path[n+1].slice(0,2): path[n+1].slice(1),n+1, acc)
    right

    let test = path[n+1].slice(1)
    test

    let left = findNextLevel( path[n+1].slice(1) ,n+1, acc)
    left


    return Math.min(right, left)
 
  }


 return findNextLevel(path[0],0,0)

}

console.log((getOptimalPath([[0], [7, 4], [2, 4, 6]]))) 
function checkPart(part) {
let isPalindrome = false
  const validatePalindrome2 = (part)=>{
   return part.split('').reverse().join('') == part 
  }

  const validatePalindrome = (word)=>{word.split('').reduce((acc,curre,i,arr)=>{
  let a = arr.filter((_,index)=> index !==i)
  a.join('') == a.reverse().join('') ? isPalindrome=true:false
  },0)

return isPalindrome}

  return validatePalindrome(part) || validatePalindrome2(part)
}


    

console.log(checkPart('zzzoonzzz'))
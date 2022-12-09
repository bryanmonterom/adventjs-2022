
function getGiftsToRefill(a1, a2, a3) {

  let stores = [...new Set(a1),...new Set(a2),...new Set(a3)]
  let toRefill= []
  stores.forEach((item)=>{
      stores.filter((itemOnStore)=> itemOnStore == item).length ===1&&  toRefill.push(item)
  })
  return toRefill
}

 

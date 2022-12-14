function selectSleigh(distance, sleighs) {

  let a= sleighs.filter((item)=> {
      return (item.consumption * distance) <= 20
  })

  
  return  a.length ==0 ? null :a[a.length-1].name
}
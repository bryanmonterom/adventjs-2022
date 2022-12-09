function countHours(year, holidays) {
    let counter =0
    holidays.forEach(element => {
      const date = new Date(`${element}/${year}`).getDay()
      if(date ===0 || date === 6) return
      counter+=2
    });
    return counter;
  }
  console.log(countHours(year, holidays))

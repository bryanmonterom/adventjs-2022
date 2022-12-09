let fit = true;
    
boxes.sort((a, b) => {
  if (a.l  < b.l ) return -1;
  return 1;
}).reduce((item, currentValue) => {
  if (
    item.l < currentValue.l &&
    item.w < currentValue.w &&
    item.h < currentValue.h
  ) {
  } else {
    fit = false;
  }
  return currentValue;
});

return fit
function dryNumber(dry, numbers) {
  return Array(numbers)
    .fill(1)
    .map((x, y) => x + y)
    .filter((item) => item.toString().includes(dry.toString()));
}

console.log(dryNumber(1, 15));

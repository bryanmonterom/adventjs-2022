function dryNumber(dry, numbers) {
let emptyyA = Array(numbers).fill(1);

emptyyA

  return Array(numbers)
    .fill(1)
    .map((val, index) => val + index)
    .filter((item) => item.toString().includes(dry.toString()));
}

console.log(dryNumber(1, 15));

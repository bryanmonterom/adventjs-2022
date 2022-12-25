function checkStepNumbers(systemNames, stepNumbers) {
  let allSystems = [...new Set(systemNames)];

  let isAscending = true;

  const findStepsBySystem = (system) => {

    let steps = systemNames.map((val, index)=>{
      return system === val ? stepNumbers[index] : 'null'
 
      });

    steps.filter((x)=>x != 'null').slice(1).forEach((el, index) => {
      let prev = steps[index]
      let curr = el
      if (prev >= curr ) {
        isAscending = false;
      }
    });

  };

  allSystems.forEach((element) => {
    findStepsBySystem(element);
  });

  return isAscending;
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];
console.log(checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])); // => false

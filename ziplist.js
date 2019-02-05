function zipList(l0, l1) {
  const result = [];
  let i = 0;
  while (i < l0.length && i < l1.length) {
    result.push(l0[i], l1[i]);
    i++;
  }
  return result;
}

function zipListTheSimpleWay(l0, l1) {
  return _.flatten(_.zip(l0, l1));
}


const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];
console.log(zipList(listOne, listTwo));
console.log(zipListTheSimpleWay(listOne, listTwo));

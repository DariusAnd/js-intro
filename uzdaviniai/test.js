const input = '402831107612071001677113442624114245471408672363321427115653063839655397096657832336813871529720429115323003323981768141387237768204364925938256095793101364298';

function mostCommon(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i] + string[i + 1]);
  }
  let obj = {};
  for (const pair of array) {
    if (obj[pair]) {
      obj[pair] += 1;
    } else {
      obj[pair] = 1;
    }
  }

  let maxCount = 0;
  for (const pair in obj) {
    if (obj[pair] > maxCount) {
      maxCount = obj[pair];
    }
  }
  const maxPairs = Object.keys(obj).filter((pair) => obj[pair] === maxCount);
  return `Poros: ${maxPairs} pasikartojimas: ${maxCount}`;
}
console.log(mostCommon(input));
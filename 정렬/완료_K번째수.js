// i-1번째부터 j-1번째까지 자르기
// sort로 정렬하기(오름차순)
// K번째 수 찾기

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
let result = [];

for (let a = 0; a < commands.length; a++) {
  const i = commands[a][0];
  const j = commands[a][1];
  const k = commands[a][2];
  const slicedArray = array.slice(i - 1, j);
  console.log(slicedArray);
  const sortedArray = slicedArray.sort((a, b) => a - b);
  const resultNumber = sortedArray[k - 1];
  result.push(resultNumber);
}

console.log(result);

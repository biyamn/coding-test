// brown yellow answer
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
  const real = brown - 4; // 6
  // 노란색의 가로+2 * 세로+2는 답이고 brown + yellow임
  // 노란색의 가로*세로는 yellow임
  for (let i = 1; i < yellow + 1; i++) {
    for (let j = 1; j < yellow + 1; j++) {
      if ((i + 2) * (j + 2) === brown + yellow && i * j === yellow) {
        return [j + 2, i + 2];
      }
    }
  }
}

console.log(solution(brown, yellow));

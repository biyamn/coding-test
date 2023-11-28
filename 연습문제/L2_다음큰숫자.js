const n = 15;
// result = 23

function solution(n) {
  let isEnd = false;
  let answer = n + 1;
  const binary = n.toString(2);
  const num = [...binary].filter((v) => v === '1').length;
  while (!isEnd) {
    if ([...answer.toString(2)].filter((v) => v === '1').length === num) {
      return answer;
    } else {
      answer += 1;
    }
  }
}

console.log(solution(n));

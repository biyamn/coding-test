const n = 5;
// return 5
// 0 1 1 2 3 5
// n인지 n+1인지 n-1인지 등이 헷갈려서 못풀었음.

// 다른 해답
function solution(n) {
  let answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (i === 0) answer.push(0);
    if (i === 1) answer.push(1);
    if (i > 1) {
      answer.push(answer[i - 1] + answer[i - 2]);
    }
  }

  return answer[n];
}
console.log(solution(n));

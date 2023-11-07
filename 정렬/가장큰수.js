// 정수를 이어 붙여 만들 수 있는 가장 큰 수

const numbers = [0];
// 9  5  34  3  30

let answer = numbers
  .map((number) => number.toString())
  .sort((a, b) => b + a - (a + b))
  .join('');

answer[0] === '0' ? '0' : answer;

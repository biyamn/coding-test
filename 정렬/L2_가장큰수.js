// 키워드
// toString(): 문자열로 변환한다.
// join(): 배열을 문자열로 변환한다.
// sort()
// - sort((a, b) => b + a - (a + b)): 문자열 비교를 할 때, 두 문자열을 더한 값이 큰 순서대로 정렬한다.

const numbers = [0];

let answer = numbers
  .map((number) => number.toString())
  .sort((a, b) => b + a - (a + b))
  .join("");

answer[0] === "0" ? "0" : answer;

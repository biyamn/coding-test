const s = "1 2 3 4";
// return "1 4"

function solution(s) {
  const arr = s.split(" ");

  // 오류:
  // const temp = Math.max(arr);
  // console.log(temp); // NaN --> Math.max()는 배열을 인자로 받지 못한다. 숫자만 받음
  // console.log(arr); // [ '1', '2', '3', '4' ]
  // console.log(...arr); // 1 2 3 4

  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);
  return `${minNumber} ${maxNumber}`;
}

console.log(solution(s));

// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// 새로운 값을 리턴하는지, 아니면 값 자체를 바꾸는지 헷갈림

const s = '  3people     me  ';
// return "  3people     Me  "

// 실패(런타임에러)
// 왜 런타임에러가 나냐? 만약 s가 ''라면 s[0]은 undefined가 되기 때문에 에러가 난다.
// 그래서 문자열의 특정 인덱스를 빼내려면 빈문자열의 경우를 생각해서 숫자인덱싱이 아닌 charAt을 써야 한다
// 참고: https://wnsdufdl.tistory.com/521
// 그리고 for문을 쓸 이유가 없다. map을 쓰면 된다.

// 내 풀이
// function solution(s) {
//   let arr = s.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i].toLowerCase();
//     let strArr = str.split('');
//     strArr[0] = strArr.charAt(0).toUpperCase();
//     arr[i] = strArr.join('');
//   }
//   return arr.join(' ');
// }

// 다른 사람 풀이
// function solution(s) {
//   return s
//     .split(' ')
//     .map((el) => {
//       const first = el.charAt(0).toUpperCase();
//       const second = el.slice(1).toLowerCase();

//       return first + second;
//     })
//     .join(' ');
// }

// 하드트레이닝(안보고 풀어보기)
// 역시 런타임에러
// 공백이 s에 여러개 주어질 때가 문제인 것 같음
// function solution(s) {
//   const array = s.split(' ');
//   console.log(array);
//   let answer = [];
//   array.map((word) => {
//     let wordArray = [...word];
//     wordArray[0] = wordArray[0].toUpperCase();
//     for (let i = 1; i < wordArray.length; i++) {
//       wordArray[i] = wordArray[i].toLowerCase();
//     }
//     const result = wordArray.join('');
//     console.log(result);
//     answer.push(result);
//   });
//   return answer.join(' ');
// }

// console.log(solution(s));

// 정답 하드트레이닝
function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      const first = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return first + rest;
    })
    .join(' ');
}

console.log(solution(s));

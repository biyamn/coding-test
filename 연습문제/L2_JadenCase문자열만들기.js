// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// 새로운 값을 리턴하는지, 아니면 값 자체를 바꾸는지 헷갈림

const s = '3people unFollowed me';
// return "3people Unfollowed Me"

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
function solution(s) {
  return s
    .split(' ')
    .map((el) => {
      const first = el.charAt(0).toUpperCase();
      const second = el.slice(1).toLowerCase();

      return first + second;
    })
    .join(' ');
}

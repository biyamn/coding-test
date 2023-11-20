// 2개 빼고 다 통과함 뭘 놓쳤을까
// 개수만 체크하면 안되나 '짝지어서'를 어떻게 체크하지

const s = '((((())))))(()';

// 오 이건 스택/큐로 푸는 게 아니었음
// function solution(s) {
//   let open = [];
//   let close = [];

//   const arr = s.split('');
//   if (arr[0] === ')' || arr[arr.length - 1] === '(') {
//     return false;
//   }

//   arr.map((el) => {
//     if (el === '(') {
//       open.push(el);
//     } else {
//       close.push(el);
//     }
//   });
//   if (open.length !== close.length) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(solution(s));

// 다른 답
// 스택으로 푸는 이유: 맨 처음에 ')'로 시작하는지를 보려고?
// 아아 열리는 건 괜찮은데(+) 닫히는 게 문제구나(-)
//  근데 이건 또 시간초과가 뜸
function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 따로 변수 안만들고 바로 +=했을 때 시간초과1이 해결됨
    count += s[i] === '(' ? 1 : -1;
    // 아래 if문 하나로 어떻게 짝지어지지 않은 걸 알지
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

// 시간초과 안뜨는 풀이 - 뭐가 다른지 모르겠음
// function solution(s)

// 배열, 문자열 모두 length 사용 가능
// const str = '123';
// console.log(str.length);

// const arr = ['1', '2', 3];
// console.log(arr.length);

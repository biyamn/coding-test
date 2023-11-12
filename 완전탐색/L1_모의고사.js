// 내 풀이(못풂)
// const answers = [1, 3, 2, 4, 2];
// // return [1, 2, 3]

// function solution(answers) {
//   const pattern1 = [1, 2, 3, 4, 5];
//   const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let result1 = 0;
//   let result2 = 0;
//   let result3 = 0;

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === pattern1[i] % (i + 1)) {
//       result1++;
//     }
//     if (answers[i] === pattern2[i] % (i + 1)) {
//       result2++;
//     }
//     if (answers[i] === pattern3[i] % (i + 1)) {
//       result3++;
//     }
//   }
//   let resultArray = [result1, result2, result3].sort();
//   let result = [];
//   for (let i = 0 ; i < resultArray.length - 1; i++) {
//     if(resultArray[i] !== resultArray[i+1]) {
//       result.push(i+1)
//       return result
//     } else {
//       result.push(resultArray[i])
//     }
//   }
// }

// console.log(solution(answers));

// ---

// 참고할 풀이
// function solution(answers) {
//   var answer = [];
//   const man1 = [1, 2, 3, 4, 5];
//   const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 여기까진 똑같음
//   let count = [0, 0, 0]; // 각 count를 따로 3개의 변수로 선언하지 않고 이렇게 할 수도 있구나

//   // 각각 몇번이나 맞았는지 세기
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] == man1[i % man1.length]) count[0]++; // 오 length로 나눠야 하는구나
//     if (answers[i] == man2[i % man2.length]) count[1]++;
//     if (answers[i] == man3[i % man3.length]) count[2]++;
//   }

//   // 가장 많이 나온 횟수 구하기
//   const max = Math.max(count[0], count[1], count[2]);

//   // 가장 높은 점수를 가진 사람이 여럿일 경우
//   for (let i = 0; i < count.length; i++) {
//     if (max == count[i]) answer.push(i + 1);
//   }
// }

// ---

// 하드트레이닝 --> 풀이 안보고 혼자 풀어보기
// 성공
const answers = [1, 2, 3, 4, 5];
// result = [1]

function solution(answers) {
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern1[i % pattern1.length]) count[0]++;
    if (answers[i] === pattern2[i % pattern2.length]) count[1]++;
    if (answers[i] === pattern3[i % pattern3.length]) count[2]++;
  }

  const max = Math.max(...count);
  let result = [];

  for (let i = 0; i < 3; i++) {
    if (count[i] === max) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(solution(answers));

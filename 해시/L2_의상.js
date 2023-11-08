// 아래 풀이 참고해서 다시 풀어보기

function solution(clothes) {
  // clothes[i][1]을 뽑아서 객체의 key로 사용한다
  // clothes[i][0]을 뽑아서 객체의 value로 사용한다

  let array = [];
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    array.push(clothes[i][1]);
  }

  for (let i = 0; i < clothes.length; i++) {
    const number = array.filter((el) => el === clothes[i][1]).length;
    console.log(number);
  }
}

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));

// 참고
// function solution(clothes) {
//   let 답 = 1;
//   let 맵객체 = new Map();

//   for (let i = 0; i < clothes.length; i++) {
//     let [옷, 옷종류] = clothes[i];
//     if (맵객체.has(옷종류)) {
//       맵객체.set(옷종류, 맵객체.get(옷종류) + 1);
//     } else {
//       맵객체.set(옷종류, 1);
//     }
//   }

//   맵객체.forEach((옷갯수) => {
//     답 *= 옷갯수 + 1;
//   });

//   답 = 답 - 1;

//   return 답;
// }

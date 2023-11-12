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
    ß;
  }
}

const clothes = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];
console.log(solution(clothes));

참고;

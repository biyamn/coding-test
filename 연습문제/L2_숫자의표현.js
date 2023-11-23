// 정확히 이해 못함

const n = 15;
// 1 2 3 4 5
// 4 5 6
// 7 8
// 15
// result: 4

// 반복문을 어떻게 써야할지 몰라서 못풀었다.
// 처음에는 이중for문으로 풀려고 했으나 그렇게 되면 두가지의 값만 더할 수 있었음.
// 그래서 while을 썼어야 했다.

// 풀이
// function solution_answer(n) {
//   let answer = 1;
//   for (let k = 1; k <= n / 2; k++) {
//     let sum = 0;
//     let i = k;
//     while (sum < n) sum += i++;
//     if (sum == n) answer++;
//   }
//   return answer;
// }

// 하드트레이닝
function hard_training(n) {
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let k = i;
    // k+=1이랑 k++이랑 왜 다르지?
    // k+=1이라고 하면 sum이 n보다 커져도 while이 안멈춤
    // 차이점이 있다: https://happygunja.tistory.com/174

    // 왜 sum<n인지 이해 못한듯 sum<=n이라고 하면 틀림
    while (sum <= n) sum += k++;
    if (sum === n) answer++;
  }
  return answer;
}

console.log(hard_training(n));

const arr = [2, 6, 8, 14];
// const arr = [1, 2, 3];
// const result =  168

// map 밖의 for문까지 return시키는 방법을 찾아봐야 할듯...
function solution(arr) {
  let arr2 = [...arr];
  for (let i = 2; i < Math.max(...arr); i++) {
    let shouldBreak = false;
    arr2.map((v, index) => {
      if (v % i !== 0) {
        shouldBreak = true;
        return;
      }
      arr2[index] = v / i;
    });
    if (shouldBreak) break;
  }
  return arr2;
}

console.log(solution(arr));

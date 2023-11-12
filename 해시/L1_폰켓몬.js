const nums = [3, 3, 3, 3, 3, 3];
const result = 3;

function solution(nums) {
  const max = nums.length / 2; // 3
  const set = new Set(nums); // {3}
  const setArray = [...set]; // [3]
  if (max > setArray.length) {
    // 3 > 1
    return setArray.length;
  } else {
    return max;
  }
}

console.log(solution(nums));

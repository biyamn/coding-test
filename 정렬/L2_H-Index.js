// 잘 이해 못했음 다시 풀어봐야 함

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];
let result = [];
for (let i = 0; i < participant.length; i++) {
  for (let j = 0; j < completion.length; j++) {
    if (participant[i] === completion[j]) {
      result = participant.filter((e) => e === completion[j]);
    }
  }
}
console.log(result);

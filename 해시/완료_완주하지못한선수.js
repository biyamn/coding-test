// 시간초과
// function solution(participant, completion) {
//   for (let j = 0; j < completion.length; j++) {
//     const index = participant.indexOf(completion[j]);
//     if (index > -1) {
//       participant.splice(index, 1);
//     }
//   }
//   return participant.toString();
// }

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i].toString();
    }
  }
}

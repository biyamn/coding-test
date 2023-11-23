const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
// 7, 3, 7 -> [2, 1]
// 5, 10, 1, 1, 20, 1 -> [1, 3, 2]

function my_solution(progresses, speeds) {
  let days = [];
  let answer = [];
  let count = 1;

  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }
  days.push(0);

  for (let i = 1; i < days.length - 1; i++) {
    if (days[i] <= days[i - 1]) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      continue;
    }
  }
  // 마지막에 어떻게 해야 하지
  // 마지막 거는 누구랑 비교해야 하지
  console.log('answer: ', answer);
  return answer;
}

// 다른 풀이
function solution(progresses, speeds) {
  const answer = [];

  // for문을 안쓰고 map의 두번째 파라미터를 통해서 days 배열을 구할 수 있었음!
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let count = 1;

  // 첫번째 값을 maxDay로 지정
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      // 오 이전의 가장 큰 값을 업데이트해주면서 비교했구나 각 인덱스에 있는 값이 아니라
      maxDay = days[i];
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}
// 출처: //yong-nyong.tistory.com/18 [💻용뇽 개발 노트💻:티스토리]

// 안보고 풀어보기
// const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 1, 1, 1, 1, 1];
// 7, 3, 7 -> [2, 1]
// 5, 10, 1, 1, 20, 1 -> [1, 3, 2]
const hardTraining = (progresses, speeds) => {
  const days = [];
  progresses.map((progress, index) => {
    days.push(Math.ceil((100 - progress) / speeds[index]));
  });
  const answer = [];
  let count = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] < maxDay) {
      count++;
    } else {
      maxDay = days[i];
      answer.push(count);
      // count = 1을 안써줬음
      count = 1;
      continue;
    }
  }
  // 여기서 answer.push를 안해줬음
  answer.push(count);
  return answer;
};

console.log(hardTraining(progresses, speeds));

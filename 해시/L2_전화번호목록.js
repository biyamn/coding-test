// 키워드
// break는 반복문의 탈출
// return은 함수의 탈출
function solution(phone_book) {
  phone_book.sort();
  console.log("sort, ", phone_book);
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      console.log("안에 있음");
      return false;
    }
  }
  console.log("안에 없음");
  return true;
}

const phone_book = ["119", "97674223", "1195524421", "112", "111111"];
console.log(solution(phone_book));

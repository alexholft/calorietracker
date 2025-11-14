// calorie.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const items = [];

function askFood() {
  rl.question('먹은 음식 이름 (엔터만 치면 종료): ', (food) => {
    const trimmed = food.trim();

    // 아무것도 안 쓰고 엔터 치면 종료
    if (!trimmed) {
      return finish();
    }

    // 음식 이름이 있으면 칼로리 물어보기
    askCalorie(trimmed);
  });
}

function askCalorie(food) {
  rl.question(`${food}의 칼로리(kcal)를 숫자로 입력: `, (kcalStr) => {
    const kcal = parseFloat(kcalStr);

    if (Number.isNaN(kcal)) {
      console.log('❗ 숫자로 입력해주세요.\n');
      return askCalorie(food); // 다시 물어보기
    }

    items.push({ food, kcal });
    console.log(`✅ 저장됨: ${food} - ${kcal} kcal\n`);

    // 다음 음식으로
    askFood();
  });
}

function finish() {
  console.log('\n===== 오늘 먹은 것 정리 =====');

  if (items.length === 0) {
    console.log('입력된 음식이 없습니다.');
    rl.close();
    return;
  }

  let total = 0;
  items.forEach((item, idx) => {
    console.log(`${idx + 1}. ${item.food}: ${item.kcal} kcal`);
    total += item.kcal;
  });

  console.log('-----------------------------');
  console.log(`총합: ${total} kcal`);
  console.log('=============================\n');

  rl.close();
}

// 프로그램 시작
askFood();

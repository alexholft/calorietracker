// server2.js
const express = require('express');
const app = express();
const PORT = 4000;

// public 폴더를 정적 파일 폴더로 사용
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

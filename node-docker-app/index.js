const express = require('express');

// 도커 실행시 컨테이너 내부 포트번호가 되므로 컨테이너 밖에서 접근할 수 있도록 포트 매핑필요
const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log('listening')
});
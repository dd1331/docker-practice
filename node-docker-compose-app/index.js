const express = require('express');
const redis = require('redis');

const client = redis.createClient({ 
	// 일반적인 경우 전자를 호스트로 사용하지만 도커 환경에서는 도커 컴포즈에 지정한 컨테이너 이름을 호스트로 사용
	// host: "https://redis-server.com",
	host: "redis-server",
	post: 6379
})

const app = express();

client.set('number', 0);

app.get('/', (req, res) => {
	client.get('number', (err, number) => {
		client.set('number', parseInt(number) + 1);
		res.send('count number: ' + number);
	})
})

app.listen(8080);

console.log('listening');
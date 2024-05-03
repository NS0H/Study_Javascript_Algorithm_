/*
[구름톤 트레이닝] 코딩 테스트 실전 대비

1번 막대 ~ N번 막대가 빈틈없이 붙어있다
i번째 막대의 너비는 1, 높이는 A[i]이다

첫째 줄에 막대의 개수 N
둘째 줄에 i번째 막대의 높이를 의미하는 숫자들이 공백을 두고 주어진다
1 <= N <= 1000
1 <= A[i] <= 100

막대 도형의 둘레를 출력하라
*/

// Run by Node.js
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	coutput: process.stdout
});

let N;
let A = [];

rl.on('line', (input) => {
	if(!N){                 // N이 없으면
		N = parseInt(input);
	}
	else {
		A = input.split(' ').map(Number);
		
		let sum = N * 2;
		sum += A[0] + A[N - 1];
		
		for(let i = 0; i < N - 1; i++){
			sum += Math.abs(A[i] - A[i + 1])
		}
		
		console.log(sum);
		
		rl.close();
	}
})
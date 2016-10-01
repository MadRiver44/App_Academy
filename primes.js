function isPrime(num){
	var count = 2;
	while(count !== num){
		if(num % count === 0){
			return false;
		}
		count++;
	}
	return true;
}

function genPrimes(num){
	var result = [];
	for(var i = 2; i < num; i++){
		if(isPrime(i)){
			result.push(i);
		}
	}
	return result;
}
genPrimes(200);

function nthPrime(num){
	console.log(genPrimes(num * num));
	return genPrimes(num * num)[num];
}

nthPrime(20);


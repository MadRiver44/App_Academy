//factorial
function fact(num){
	var sum = 1;
	while(num !== 0){
		sum *= num;
		num--;
	}
	return sum;
}
//fact(5);


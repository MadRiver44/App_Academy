//power of 2
function p2(num){
	if(num  % 2 === 1){
		return true;
	}else if(num % 2 !== 0){
		return p2(num/2);
	}
	return false;
}
//p2(62);
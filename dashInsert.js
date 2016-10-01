//dash insert
function dash(num){
	var result = "";
	var str = num.toString().split("");
	for(var i = 0; i < str.length; i++){
			if(str[i] % 2 !== 0 || str[i-1] % 2 !== 0){
			result += "-";
			}
		result += str[i];
	}
	result = result.slice(1);
	return result;
}
//dash(2942293522733);
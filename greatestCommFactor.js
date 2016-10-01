// greatest common factor
function gcf(num1, num2){
	var factor = 2;
	var gcf = 0;
	if(num1 < 2 || num2 < 2){
		return 1;
	}else{
		while(num1 > factor && num2 > factor){
			if(num1 % factor === 0 && num2 % factor === 0){
				gcf = factor;
			}factor++;
		}
	}return gcf;
}
//gcf(180, 90);

function gcf(num1, num2){
	if(num1 < 2 || num2 < 2){
		return 1;
	}
	var start = Math.floor(Math.min(num1, num2)/2);
	for(var i = start; i >= 2; i--){
		if(num1 % i === 0 && num2 % i === 0){
			return i;
		}
	}return "no gcf";
}

gcf(18, 45);

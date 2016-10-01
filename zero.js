function zero(arr){
	var len = arr.length;
	var result1 = 0;
	var result2 = 0;
	var array = [];
	for(var i = 0; i< len; i++){
		for(var j = 0; j < len; j++){
			if(arr[i] + arr[j] === 0){
				result1 = arr.indexOf(arr[i]);
				result2 = arr.indexOf(arr[j]);
				array.push(result1, result2);
			}
		}
	}if(array.length === 0){
		return "nil";
	}else{
		return array.slice(0,2);
	}
}
//zero([1, 3, 5, -1]);
function third(arr){
	var result = arr.sort(function(a, b){
		return b - a;
	});
	return result[2];
}
//third([2,3,7,4]);
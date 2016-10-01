function rev(str){
	return str.split("").reverse().join("");
}
//rev("fatbatsinthecave");
//without reverse
function rev(str){
	var len = str.length-1;
	var newStr = "";
	for(var i= len; i >= 0; i--){
		newStr += str[i];
	}
	return newStr;
}
//rev("cave");


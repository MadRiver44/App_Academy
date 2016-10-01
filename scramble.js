//scramble letters
function scramble(str, arr){
var newStr = "";
arr.forEach(function(item, index){
	if(str[index]!== item)
		newStr += str[item];
			return newStr;
		});
	return newStr;
}
//scramble("afjdfji",[3,0,6,1,2,5,4]);
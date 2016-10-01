//pallindrome
function pall(str){
	str = str.split(" ").join("").toLowerCase();
	var regex = str.split("").reverse().join("");
	console.log(regex, str);
	if(regex === str){
		return true;
	}
	return false;
}
//pall("racecar");


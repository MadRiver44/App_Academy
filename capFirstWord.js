//cap first word
function cap(str){
	return str.replace(/\b[a-zA-Z]/gi, function(char){
		return char.toUpperCase();
	});
}
//cap("this is a sentence");
//hours:mins

function timeconvert(num){
	var hours = Math.floor(num / 60);
	var min =  Math.floor(num % 60);
	return hours +":"+ min;
}
//timeconvert(223);


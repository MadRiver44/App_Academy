//longest word in sen
function longest(str){
	var word = str.split(" ").sort(function(a,b){
		return b.length - a.length;
	});
	return word[0];
}
//longest("the quick brown fox jumps over the moon");

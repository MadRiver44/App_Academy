function count(str) {
    // Count all occurrences in str
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
    	var letter = str[i];
		charCount[letter] === undefined ? charCount[letter] = 1 
		: charCount[letter] += 1;
       // charCount[str[i]] = 1 + (charCount[str[i]] || 0);
    }

    // Loop over and filter charCount
    var result = 0;
    for (var prop in charCount) {
        if (charCount[prop] > 1){
        	console.log(prop);
        	result++;
    	}
    }
    return result;
}

count("adsaaakkkkffda");
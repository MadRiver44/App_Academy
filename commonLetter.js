//common letter
function common(string){
	var obj = {};
	var  finalAnswer = [];
	arr = string.split("");
	//get totals for letters
	var reducer = function(obj, letter){
		obj[letter] === undefined ? obj[letter] = 1 : obj[letter] += 1;
		return obj;
		};
	var result = arr.reduce(reducer, obj);
	// object to store answer
	var answer = {
		count : 0
	};
	// get highest letter count
	for(var prop in result){
		if(result[prop] > answer["count"]){
			answer["count"] = result[prop];
		}
	}
	//push key:value to array
	finalAnswer.push(valueToKey(answer["count"], result));
	finalAnswer.push(answer["count"]);
	
	return finalAnswer;
}

//common("adsaaaffdkkkfjfa");

//get key for highest value
function valueToKey(value, obj){
	for(var prop in obj){
		var this_val = obj[prop];
		if(this_val === value){
			return prop;
		}
	}
}
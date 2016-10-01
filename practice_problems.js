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

//factorial
function fact(num){
	var sum = 1;
	while(num !== 0){
		sum *= num;
		num--;
	}
	return sum;
}
//fact(5);

//longest word in sen
function longest(str){
	var word = str.split(" ").sort(function(a,b){
		return b.length - a.length;
	});
	return word[0];
}
//longest("the quick brown fox jumps over the moon");


//sum nums
function sum(num){
	var result = 0;
	for(var i = num; i >= 0; i--){
		result += i;
	}
	return result;
}
//sum(5);


//hours:mins

function timeconvert(num){
	var hours = Math.floor(num / 60);
	var min =  Math.floor(num % 60);
	return hours +":"+ min;
}
//timeconvert(223);


//count vowels
function countvowels(str){
	 return str.match(/a|e|i|o|u/gi).length;
}
//countvowels("the quick brown fox jumps over the moon");


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

//az check

function azHelper(str){
	if(str.indexOf("a") === -1 || str.indexOf("z") === -1 || str.indexOf("z") < str.indexOf("a")){
		return false;
		}
	return true;
}

function az(str){
	var idxA = str.indexOf("a");
	var idxZ = str.indexOf("z");
	var dist = idxA+3;
	
	if(azHelper(str) === true){
		if(idxZ <= dist){
			return true;
		}
	}
	return false;
}
//az("za");

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

//power of 2

function p2(num){
	if(num  % 2 === 1){
		return true;
	}else if(num % 2 !== 0){
		return p2(num/2);
	}
	return false;
}
//p2(62);

function third(arr){
	var result = arr.sort(function(a, b){
		return b - a;
	});
	return result[2];
}
//third([2,3,7,4]);

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

//dash insert
function dash(num){
	var result = "";
	var str = num.toString().split("");
	for(var i = 0; i < str.length; i++){
			if(str[i] % 2 !== 0 || str[i-1] % 2 !== 0){
			result += "-";
			}
		result += str[i];
	}
	result = result.slice(1);
	return result;
}
//dash(2942293522733);

//cap first word
function cap(str){
	return str.replace(/\b[a-zA-Z]/gi, function(char){
		return char.toUpperCase();
	});
}
//cap("this is a sentence");
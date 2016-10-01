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
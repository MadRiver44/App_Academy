/*
 * Remove item from array
 * Modifies the array “in place”, i.e. the array passed as an argument
 * is modified as opposed to creating a new array. Also returns the modified
 * array for your convenience.
 */
function removeFromArray(arr, value){
	var valueIndex;
	valueIndex =  arr.indexOf(value);
	// Look for the item (the item can have multiple indices)
	while(valueIndex !== -1){
		// Remove the item, then return the modified array
		arr.splice(valueIndex,1)
		valueIndex = arr.indexOf(value);
	}
	return arr;
}
//removeFromArray([45,3,45,29,35,45], 45); //[3,29,35]

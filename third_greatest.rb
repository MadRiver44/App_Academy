#third greatest
def third(arr)
	arr.sort!{|a, b| b - a}
	return arr[2]
end

third([2, 3, 7, 4])
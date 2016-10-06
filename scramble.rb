#scramble
def scramble(str, arr)
	result = ""
	i = 0
	while i < arr.length
		result += str[arr[i]]
		i += 1
	end
	return result
end

scramble("markov", [5, 3, 1, 4, 2, 0])
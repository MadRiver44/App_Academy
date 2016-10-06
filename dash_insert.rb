#dasherize
def dash(num)
	num_str = num.to_s
	arr = num_str.split("")
	result = ""
	
	i = 0
	while i < arr.length
		if i > 0
			number = arr[i].to_i
			prev_number = arr[i-1].to_i
			if number % 2 == 1 || prev_number % 2 == 1
				result += "-"
			end
		end
		result += arr[i]
		i += 1
	end
	return result
end
dash(2942293522733)
# factorial
def fact(num)
	if num <= 0
		return nil
	end
	
	result = 1
	while num > 0
		result *= num
		num -= 1
	end
	return result
end

fact(5)
#greatest common factor
def gcf(num1, num2)
	count = 1
	greatest_fact = 0
	smaller_num = [num1, num2].min
	larger_num = [num1, num2].max
	
	if larger_num % smaller_num == 0
		return smaller_num
	else
		while count < smaller_num && count < larger_num
			if smaller_num % count == 0 && larger_num % count == 0
				greatest_fact = count
			end
			count += 1
		end
	end
	return greatest_fact
end
gcf(9, 3)
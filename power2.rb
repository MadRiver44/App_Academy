# powers of 2
def power2(num)
	while num % 2 == 0 && num != 0
		num = num /2
		if num == 1
			return true
		end
	end
	return false
end
			
power2(8)
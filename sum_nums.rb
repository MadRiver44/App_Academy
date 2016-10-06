#sum Nums
def sum(num)
	result = 0
	while num > 0
		result += num
		num -= 1
	end
	  result
  end

sum(5)
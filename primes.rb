#isPrime
def is_prime(num)
	count = 2
	while count != num
	 	if num % count == 0
	 		return false
	 	end
	 	count += 1
	 end
	 return true
end
is_prime(31)
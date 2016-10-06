#gen primes
def gen_primes(num)
	num = num *  num
	count = 2
	if num == 2 
		return true
	end
	arr = []
	while count < num
		if is_prime(count) == true
			arr.push(count)
		end
		count += 1
	end
	return arr
end
gen_primes(25)

# nth prime
def nth_prime(num)
	if num < 3
		 arr = gen_primes(3)
	else
		arr = gen_primes(num)
		end
	return arr[num-1]
end
nth_prime(5)
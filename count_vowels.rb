#count vowels
def vowel(str)
	regex = /[aeiou]/i
	i = 0
	count = 0
	
	while i < str.length
		if str[i].match(regex)
			count += 1
		end
		i += 1
	end
	return count
end

vowel("be easy homie")
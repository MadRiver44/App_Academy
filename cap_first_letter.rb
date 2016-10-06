#cap first letter word
def cap(str)
	i = 0
	words = str.split(" ")
	
	while i < words.length
		words[i][0] = words[i][0].upcase
		i += 1
	end
	return words.join(" ")
end
cap("this is a sentence")
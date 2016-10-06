#longest word in string
def longest(string)
	arr = string.split().sort{|a, b| b.length - a.length}
	return arr[0]
end
longest("the wide World of wackkky sports")
#commmon letter
def common_letter(str)
	arr = str.split("")
	tally = Hash.new(0)
	 arr.each do |item|  
		tally[item] += 1
		end
	 result = tally.sort_by{|key, value| value}
	 answer_index = result.length 
	 return result[answer_index -1]
	#return tally.sort[tally.length-1]
end
common_letter("adsaaaffffssssssfff")
# reverse a string
def reverse(str)
	new_string = ""
	
	i = 0
	while i < str.length
	  new_string = str[i] + new_string
	  i += 1
	 end
	  new_string
	end

reverse("abcd")
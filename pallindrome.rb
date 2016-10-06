#pallindrome
def pallindrome(str)
	str = str.split(" ").join("").downcase
	pallin = str.split("").reverse().join("")
	if str == pallin
		return true
	else
		return false
	end
end

pallindrome("do geese see god")
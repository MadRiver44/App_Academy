#az check
def az_helper(str)
	if str.index("z") == nil || str.index("a") == nil ||
		str.index("z") < str.index("a")
		return false
	else
		return true
	end
end

def az(str)
	indexA = str.index("a")
	indexZ = str.index("z")
	if indexA == nil		
		return false
	end
	if indexZ == nil
		return false
	end
	
	dist = indexA + 3
	if az_helper(str) == true
		if indexZ <= dist
			return true
		end
	return false
	end
end

az("abcz")
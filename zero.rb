# two sums
def two_sums(arr)
	i = 0
	
	while i < arr.length
	  j = i + 1
	  while j < arr.length
		  if arr[i] + arr[j] == 0
		  	return [i, j]
	  	  end
		j += 1
	  end
	  i += 1
	 end
	 return nil
end
two_sums([1, 3, 5, -3])
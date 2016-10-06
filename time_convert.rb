#time conversion
def time(num)
	hours = (num / 60).round
	mins = (num % 60).round
	return "#{hours}:#{mins}"
end
time(600)
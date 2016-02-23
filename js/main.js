
var time = document.querySelector(".timeDisplay")

var colorHex = document.querySelector(".colorHex")


var colorGradient = document.querySelector(".colorGradient")

var backgroundColor = "#FF1111"

colorGradient.style.background = "#FF1111"


colorHex.innerHTML = "FF1111"


 var displayTime = function() {
	var date = new Date()
	var hours = date.getHours()	
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()

	var checkTime = function(input) {
		if (input < 10) {
			input = "0" + input
		}
	return input
	}
	minutes = checkTime(minutes)
	seconds = checkTime(seconds)
	time.innerHTML = hours + ":" + minutes + ":" + seconds
}

var displayTimeId = setInterval(displayTime, 1000)



		


		

		


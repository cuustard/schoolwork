var divElement = document.getElementById("cps-box");
var countDisplay = document.getElementById("countDisplay");

var clickCount = 0; // Initialize the click count
var timerActive = false; // To track if the timer is active

function startTimer() {
	if (!timerActive) {
		timerActive = true;
		clickCount = 1; // Reset the click count when the timer starts
		countDisplay.textContent = clickCount;
		setTimeout(function () {
			timerActive = false;
			// The 5-second timer has ended
			alert(
				"5 second timer ended. You clicked " +
					clickCount +
					" times in 5 seconds. So your cps: " + clickCount/5
			);
		}, 5000);
	}
}

function myFunction() {
	if (timerActive) {
		clickCount += 1;
		countDisplay.textContent = clickCount;
	}
}

divElement.addEventListener("click", myFunction);
divElement.addEventListener("click", startTimer);

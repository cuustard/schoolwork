function calculateCost() {
	// Get input values
	var distance = parseFloat(document.getElementById("distance").value);
	var efficiency = parseFloat(document.getElementById("efficiency").value);
	var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
	var numRiders = parseFloat(document.getElementById("riders").value);

	// Convert distance to miles if it's in kilometers
	if (document.getElementById("unit").value === "km") {
		distance *= 0.621371;
	}

	// Calculate fuel cost
	var gallonsUsed = distance / efficiency;
	var litresUsed = gallonsUsed * 4.54609;
	var costInPence = (litresUsed * fuelPrice) / numRiders;
	var costInPounds = costInPence / 100;

	// Display the result
	document.getElementById("result").innerHTML =
		"The cost of the trip is: £" + costInPounds.toFixed(2);
}

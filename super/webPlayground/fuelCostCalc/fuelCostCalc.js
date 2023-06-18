function calculateCost() {
	// Get input values
	var numRiders = parseFloat(document.getElementById("riders").value);
	var distance = parseFloat(document.getElementById("distance").value);
	var efficiency = parseFloat(document.getElementById("efficiency").value);
	var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

	// Convert distance to miles if it's in kilometers
	if (document.getElementById("unit").value === "km") {
		distance *= 0.621371;
	}

	// Calculate fuel cost
	var gallonsUsed = distance / efficiency;
	var litresUsed = gallonsUsed * 4.54609;
	var costInPence = litresUsed * fuelPrice;
	var costInPounds = costInPence / 100;
	var costPerPerson = costInPounds / numRiders;

	// Display the result
	document.getElementById("result").innerHTML =
		"The cost of the trip is: £" + costInPounds.toFixed(2);

	document.getElementById("result2").innerHTML =
		"Cost Per Person: £" + costPerPerson.toFixed(2);
}

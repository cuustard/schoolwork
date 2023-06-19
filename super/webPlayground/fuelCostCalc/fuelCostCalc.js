// Event listeners to calculate the cost whenever an input changes
document.getElementById("riders").addEventListener("input", calculateCost);
document.getElementById("distance").addEventListener("input", calculateCost);
document.getElementById("efficiency").addEventListener("input", calculateCost);
document.getElementById("fuelPrice").addEventListener("input", calculateCost);
document
	.getElementById("distanceUnit")
	.addEventListener("change", calculateCost);
document
	.getElementById("efficiencyUnit")
	.addEventListener("change", calculateCost);

// Create subroutine
function calculateCost() {
	// Get input values
	var numRiders = parseFloat(document.getElementById("riders").value);
	var distance = parseFloat(document.getElementById("distance").value);
	var efficiency = parseFloat(document.getElementById("efficiency").value);
	var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

	// Convert distance to miles if it's in kilometers
	if (document.getElementById("distanceUnit").value === "km") {
		distance *= 0.621371;
	}

	// If Paying Passengers is empty, assume they mean 1 passenger (themself)
	if (document.getElementById("riders").value === "") {
		numRiders = 1;
	}

	// convert efficiency to mpg if its in mi/kWH

	if (document.getElementById("efficiencyUnit").value === "mikWH") {
		efficiency = (efficiency * 3.37) / 0.833;
	}

	// convert fuel cost rates to pence per litre
	if (document.getElementById("costUnit").value === "kWM") {
		fuelPrice = (cost / 2600000 ) * 33.6
	}
	// Calculate fuel cost
	var gallonsUsed = distance / efficiency;
	var litresUsed = gallonsUsed * 4.54609;
	var costInPence = litresUsed * fuelPrice;
	var costInPounds = costInPence / 100;
	var costPerPerson = costInPounds / numRiders;

	// Display the result
	document.getElementById("result").innerHTML =
		"Total cost: £" + costInPounds.toFixed(2);

	document.getElementById("result2").innerHTML =
		"Per passenger cost: £" + costPerPerson.toFixed(2);
}

// Event listeners to calculate the cost whenever an input changes
document.getElementById("numRiders").addEventListener("input", calculateCost);
document.getElementById("distance").addEventListener("input", calculateCost);
document
	.getElementById("distanceUnit")
	.addEventListener("change", calculateCost);
document.getElementById("carType").addEventListener("change", calculateCost);
document
	.getElementById("fuelEfficiency")
	.addEventListener("input", calculateCost);
document.getElementById("fuelPrice").addEventListener("input", calculateCost);
document
	.getElementById("efficiencyUnit")
	.addEventListener("change", calculateCost);
document.getElementById("costUnit").addEventListener("change", calculateCost);

// Create subroutine
function calculateCost() {
	// Get input values
	var numRiders = parseFloat(document.getElementById("numRiders").value);
	var distance = parseFloat(document.getElementById("distance").value);
	var distanceUnit = document.getElementById("distanceUnit").value;
	var carType = document.getElementById("carType").value;
	var fuelEfficiency = parseFloat(
		document.getElementById("fuelEfficiency").value
	);
	var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
	var efficiencyUnit = document.getElementById("efficiencyUnit");

	var costUnit = document.getElementById("costUnit");
	if (distanceUnit === "km") {
		// Convert distance to miles if it's in kilometers
		distance *= 0.621371;
	}
	// If Paying Passengers is empty, assume they mean 1 passenger (themself)
	if (document.getElementById("numRiders").value === "") {
		numRiders = 1;
	}
	if (carType === "electric") {
		efficiencyUnit.innerHTML = "mi/kWH";
		costUnit.innerHTML = "kWH";
		// calculate cost of electricity
		var electricityUsed = distance / fuelEfficiency;
		var costInPence = electricityUsed * fuelPrice;
		var costInPounds = costInPence / 100;
		var costPerPerson = costInPounds / numRiders;
	} else {
		efficiencyUnit.innerHTML = "mpg";
		costUnit.innerHTML = "ppl";
		// calculate cost of petrol
		var gallonsUsed = distance / fuelEfficiency;
		var litresUsed = gallonsUsed * 4.54609;
		var costInPence = litresUsed * fuelPrice;
		var costInPounds = costInPence / 100;
		var costPerPerson = costInPounds / numRiders;
	}
	////////
	// Display the result
	document.getElementById("result").innerHTML =
		"Total cost: £" + costInPounds.toFixed(2);

	document.getElementById("result2").innerHTML =
		"Per passenger cost: £" + costPerPerson.toFixed(2);
}

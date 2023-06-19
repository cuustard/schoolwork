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
document.getElementById("fuelType").addEventListener("change", calculateCost);
document.getElementById("costUnit").addEventListener("change", calculateCost);

// Function to calculate the fuel cost
function calculateCost() {
	// Get input values
	var numRiders = parseFloat(document.getElementById("riders").value);
	var distance = parseFloat(document.getElementById("distance").value);
	var efficiency = parseFloat(document.getElementById("efficiency").value);
	var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
	var fuelType = document.getElementById("fuelType").value;

	// Get select elements
	const fuelSelect = document.getElementById("fuelType");
	const efficiencyUnitSelect = document.getElementById("efficiencyUnit");
	const costUnitSelect = document.getElementById("costUnit");

	// Set efficiency unit and cost unit based on fuel type
	if (fuelSelect.value === "Electricity") {
		efficiencyUnitSelect.value = "mi/kWH";
		costUnitSelect.value = "kWH";
	} else {
		efficiencyUnitSelect.value = "mpg";
		costUnitSelect.value = "L";
	}

	// Set energy content based on fuel type
	var energyContent = fuelType === "diesel" ? 36.4 : 33.5;

	// Convert distance to miles if it's in kilometers
	if (document.getElementById("distanceUnit").value === "km") {
		distance *= 0.621371;
	}

	// If Paying Passengers is empty, assume they mean 1 passenger (themselves)
	if (document.getElementById("riders").value === "") {
		numRiders = 1;
	}

	// Convert efficiency to mpg if it's in mi/kWH
	if (document.getElementById("efficiencyUnit").value === "mi/kWH") {
		efficiency *= energyContent;
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

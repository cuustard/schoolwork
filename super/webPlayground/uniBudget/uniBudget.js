const weeksInMonth = 4.34524;
const weeksInYear = 42;

window.onload = function () {
	var table = document.querySelector("table");
	var labels = [];
	var data = [];
	var sum = 0;
	var sumPerWeek = 0;
	var sumPerYear = 0;
	for (var i = 1; i < table.rows.length - 1; i++) {
		var label = table.rows[i].cells[0].innerText;
		labels.push(label);

		var cost = table.rows[i].cells[1].innerText;
		cost = parseFloat(cost.replace("£", ""));
		data.push(cost);
		sum += cost;

		var costPerWeek = cost / weeksInMonth;
		table.rows[i].cells[2].innerText = "£" + costPerWeek.toFixed(2);
		sumPerWeek += costPerWeek;

		var costPerYear = costPerWeek * weeksInYear;
		table.rows[i].cells[3].innerText = "£" + costPerYear.toFixed(2);
		sumPerYear += costPerYear;
	}
	document.getElementById("sumOfAverageCosts").innerText = "£" + sum.toFixed(2);
	document.getElementById("sumOfAverageCostsPerWeek").innerText = "£" + sumPerWeek.toFixed(2);
	document.getElementById("sumOfAverageCostsPerYear").innerText = "£" + sumPerYear.toFixed(2);

	var ctx = document.getElementById("myChart").getContext("2d");
	myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Cost",
					data: data,
					backgroundColor: "rgba(75, 192, 192, 0.2)",
					borderColor: "rgba(75, 192, 192, 1)",
					borderWidth: 1,
				},
			],
		},
		options: {
			indexAxis: "y",
			scales: {
				x: {
					beginAtZero: true,
				},
			},
		},
	});
};

document.addEventListener("DOMContentLoaded", function () {
	const courseWorkInput = document.getElementById("courseWorkMark");
	const courseWorkInputManual = document.getElementById("courseWorkMarkManual");
	const examInput = document.getElementById("examMark");
	const examInputManual = document.getElementById("examMarkManual");
	const result = {};
	const courseWorkPercent = {};
	const examPercent = {};
	const totalPercent = {};

	["2017", "2018", "2019", "2020", "2021", "2022", "2023"].forEach((year) => {
		result[year] = document.getElementById(`result${year}`);
		courseWorkPercent[year] = document.getElementById(`courseWorkPercent${year}`);
		examPercent[year] = document.getElementById(`examPercent${year}`);
		totalPercent[year] = document.getElementById(`totalPercent${year}`);
	});

	const gradeRanges = {
		2017: [
			{ min: 284, grade: "A*" },
			{ min: 246, grade: "A" },
			{ min: 208, grade: "B" },
			{ min: 171, grade: "C" },
			{ min: 134, grade: "D" },
			{ min: 97, grade: "E" },
			{ min: 0, grade: "U" },
		],
		2018: [
			{ min: 276, grade: "A*" },
			{ min: 238, grade: "A" },
			{ min: 202, grade: "B" },
			{ min: 167, grade: "C" },
			{ min: 132, grade: "D" },
			{ min: 97, grade: "E" },
			{ min: 0, grade: "U" },
		],
		2019: [
			{ min: 285, grade: "A*" },
			{ min: 250, grade: "A" },
			{ min: 212, grade: "B" },
			{ min: 174, grade: "C" },
			{ min: 137, grade: "D" },
			{ min: 100, grade: "E" },
			{ min: 0, grade: "U" },
		],
		2020: [
			{ min: 202, grade: "A*" },
			{ min: 171, grade: "A" },
			{ min: 139, grade: "B" },
			{ min: 107, grade: "C" },
			{ min: 76, grade: "D" },
			{ min: 45, grade: "E" },
			{ min: 0, grade: "U" },
		],
		2021: [
			{ min: 191, grade: "A*" },
			{ min: 165, grade: "A" },
			{ min: 135, grade: "B" },
			{ min: 105, grade: "C" },
			{ min: 75, grade: "D" },
			{ min: 45, grade: "E" },
			{ min: 0, grade: "U" },
		],
		2022: [
			{ min: 264, grade: "A*" },
			{ min: 229, grade: "A" },
			{ min: 189, grade: "B" },
			{ min: 150, grade: "C" },
			{ min: 111, grade: "D" },
			{ min: 72, grade: "E" },
			{ min: 0, grade: "U" },
		],
		2023: [
			{ min: 286, grade: "A*" },
			{ min: 251, grade: "A" },
			{ min: 209, grade: "B" },
			{ min: 167, grade: "C" },
			{ min: 126, grade: "D" },
			{ min: 85, grade: "E" },
			{ min: 0, grade: "U" },
		],
	};

	function getGrade(overallGrade, year) {
		return gradeRanges[year].find((range) => overallGrade >= range.min).grade;
	}

	function calculateGrade() {
		const courseWorkMarkValue = parseInt(courseWorkInput.value, 10);
		const examMarkValue = parseInt(examInput.value, 10);

		const courseWorkPercentValue = (courseWorkMarkValue / 70) * 100;
		const examPercentValue = (examMarkValue / 280) * 100;

		// Write the percentages to the elements with IDs 'courseworkPercent' and 'examPercent'
		document.getElementById("courseworkPercent").textContent = `${courseWorkPercentValue.toFixed(2)}%`;
		document.getElementById("examPercent").textContent = `${examPercentValue.toFixed(2)}%`;

		for (let year in result) {
			let overallGrade;
			if (year === "2020" || year === "2021") {
				overallGrade = examPercentValue * 2.8;
				totalPercent[year].textContent = `${examPercentValue.toFixed(2)}%`;
			} else {
				overallGrade = (courseWorkPercentValue * 0.2 + examPercentValue * 0.8) * 3.5;
				totalPercent[year].textContent = `${(courseWorkPercentValue * 0.2 + examPercentValue * 0.8).toFixed(
					2
				)}%`;
			}
			result[year].textContent = getGrade(overallGrade, year);
		}
	}

	function syncValues(input1, input2) {
		input1.addEventListener("input", function () {
			input2.value = this.value;
			calculateGrade();
		});
	}

	[courseWorkInput, courseWorkInputManual, examInput, examInputManual].forEach((input) => {
		syncValues(
			input,
			input === courseWorkInput || input === courseWorkInputManual ? courseWorkInputManual : examInputManual
		);
		input.addEventListener("input", function (e) {
			const max = input === courseWorkInput || input === courseWorkInputManual ? 70 : 280;
			e.target.value = Math.max(0, Math.min(max, e.target.value));
		});
	});

	calculateGrade();

	Array.from(document.getElementsByTagName("td")).forEach((cell) => {
		["mouseenter", "mouseleave"].forEach((event) => {
			cell.addEventListener(event, function () {
				const colIndex = this.cellIndex;
				Array.from(this.parentElement.parentElement.rows).forEach((row) => {
					row.cells[colIndex].classList.toggle("hovered-column", event === "mouseenter");
				});
			});
		});
	});
});

var table = document.getElementById("gradeBoundariesTable");
var years = Array.from(table.querySelectorAll("tr:not(:first-child) td:first-child")).map((td) => td.innerText);
var grades = Array.from(table.querySelectorAll("tr:first-child th:not(:first-child)")).map((th) => th.innerText);
var data = Array.from(table.querySelectorAll("tr:not(:first-child)")).map((tr) =>
	Array.from(tr.querySelectorAll("td:not(:first-child)")).map((td) => parseFloat(td.innerText))
);
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var ctx = document.getElementById("gradeBoundariesChart").getContext("2d");
var chart = new Chart(ctx, {
	type: "line",
	data: {
		labels: years,
		datasets: grades.map((grade, i) => ({
			label: grade,
			data: data.map((row) => row[i]),
			fill: false,
			borderColor: colors[i % colors.length],
			tension: 0.1,
		})),
	},

	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Grade Boundaries Over the Years",
			},
		},
	},
});

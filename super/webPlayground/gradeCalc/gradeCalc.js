document.addEventListener("DOMContentLoaded", function () {
	const courseWorkInput = document.getElementById("courseWorkMark");
	const courseWorkInputManual = document.getElementById("courseWorkMarkManual");
	const examInput = document.getElementById("examMark");
	const examInputManual = document.getElementById("examMarkManual");
	const result = document.getElementById("result");
	const courseWorkPercentElement = document.getElementById("courseWorkPercent");
	const examPercentElement = document.getElementById("examPercent");
	const totalPercentElement = document.getElementById("totalPercent");

	function getGrade(overallGrade) {
		const gradeRanges = [
			{ min: 285, grade: "A*" },
			{ min: 250, grade: "A" },
			{ min: 212, grade: "B" },
			{ min: 174, grade: "C" },
			{ min: 137, grade: "D" },
			{ min: 100, grade: "E" },
			{ min: 0, grade: "U" },
		];

		return gradeRanges.find((range) => overallGrade >= range.min).grade;
	}

	function calculateGrade() {
		const courseWorkMarkValue = parseInt(courseWorkInput.value, 10);
		const examMarkValue = parseInt(examInput.value, 10);

		const courseWorkPercent = (courseWorkMarkValue / 70) * 100;
		const examPercent = (examMarkValue / 280) * 100;

		const overallGrade = (courseWorkPercent * 0.2 + examPercent * 0.8) * 3.5;
		result.textContent = getGrade(overallGrade);

		courseWorkPercentElement.textContent = `${courseWorkPercent.toFixed(2)}%`;
		examPercentElement.textContent = `${examPercent.toFixed(2)}%`;

		const totalPercent = courseWorkPercent * 0.2 + examPercent * 0.8;
		totalPercentElement.textContent = `${totalPercent.toFixed(2)}%`;
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

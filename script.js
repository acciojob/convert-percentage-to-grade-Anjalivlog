function calculateGrade(percentage) {
  //your code here
	if (typeof percentage !== 'number' || percentage < 0) {
    return 'F';
  }

	const roundedPercentage = Math.round(percentage);
	
	if(percentage >= 90) {
		return 'A';
	} else if (roundedPercentage >= 80) {
		return 'B';
	} else if (roundedPercentage >= 70) {
		return 'C'
	} else if (roundedPercentage >= 60) {
		return 'D'
	} else {
    return 'F';
  }
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));

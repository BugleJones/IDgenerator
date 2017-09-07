var countdownGenerator = function (x) {
	var position = x;
	var tMinus = "T-minus";
	var dots = "...";

	return function () {
	if (x > 0) { 
	console.log("T-minus " + x + dots);
	}

	if (x === 0) {
	console.log("Blast Off!");
	}

	if (x < 0 ) {
	console.log("Rockets already gone, sorry bub!")
	}
	
	return x[x--] 
	}
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
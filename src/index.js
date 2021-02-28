exports.min = function min(array) {
	if (array) {
		let m = 0;
		for (i = 0; i < array.length; i++) {
			if (array[i] < m) {
				m = array[i];
			}
		}
		return m;
	} else {
		return 0;
	}
}

exports.max = function max(array) {
	if (array) {
		let m = 0;
		for (i = 0; i < array.length; i++) {
			if (array[i] > m) {
				m = array[i];
			}
		}
		return m;
	} else {
		return 0;
	}
}

exports.avg = function avg(array) {
	if (array) {
		let sum = 0;
		for (i = 0; i < array.length; i++) {
			sum += array[i];
		}
		if (sum == 0) {
			return 0;
		} else {
			return sum / array.length;
		}
	} else {
		return 0;
	}
}

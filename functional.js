window.Func = {};

window.Func.map(func, arr) {
	var out = [];
	for (i in arr) {
		out.push(func(arr[i]));
	}
	return out;
}

window.Func.reduce(func, arr) {
	if (arr.length == 0) {
		return null;
	}
	var out = arr[0];
	for (var i = 1; i < arr.length; i++) {
		out = func(out, arr[i]);
	}
	return out;
}

window.Func.range(/*[start,] stop [, step]*/) {
	var start = 0;
	var stop = 0;
	var step = 1;
	if (arguments.length == 0) {
		return [];
	} else if (arguments.length == 1) {
		stop = arguments[0];
	}
	if (arguments.length > 1) {
		start = arguments[0];
		stop = arguments[1];
	}
	if (arguments.length > 2) {
		step = arguments[2];
	}


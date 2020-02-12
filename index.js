console.log('Snipte for Add all element of Objects');
var a = [{ level: 1 }, { level: 2 }, { level: 3 }, { level: 6 }, { level: 4 }];
console.log(
	a.reduce(function(cnt, o) {
		return cnt + o.level;
	}, 0)
);
